import {
   BadRequestException,
   Inject,
   Injectable,
   UnauthorizedException,
} from '@nestjs/common';
import { CookieOptions, Response } from 'express';
import { DateTime } from 'luxon';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

import { AuthType } from '@quote-generator/shared';

import { Auth0Service } from '../../Infrastructure';
import { AUTH_COOKIE_ACCESS_TOKEN, CACHE_PREFIX } from '../auth.constant';
import { IAuthResponse, ILoginAuthResponse } from '../interfaces';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
   constructor(
      @Inject(CACHE_MANAGER) private cacheManager: Cache,
      private auth0Service: Auth0Service,
      private configService: ConfigService,
   ) {}

   async login(
      username: string,
      password: string,
   ): Promise<ILoginAuthResponse> {
      try {
         return await this.auth0Service.signIn(username, password);
      } catch (e) {
         throw new BadRequestException(e.message);
      }
   }

   async register(email: string, username: string, password: string) {
      try {
         return await this.auth0Service.signUp(email, username, password);
      } catch (e) {
         throw new BadRequestException(e.message);
      }
   }

   async logout(response: Response): Promise<IAuthResponse> {
      this.clearCookies(response);
      return {
         type: AuthType.SUCCESS,
      };
   }

   async getUserById(id: string) {
      try {
         const key = AuthService.getIdCacheKey(id);

         // Check in cache
         let user = await this.cacheManager.get(key);
         if (user) {
            return user;
         }

         // Retrieve and set in cache
         user = await this.auth0Service.getUserById(id);
         await this.cacheManager.set(key, user);

         return user;
      } catch (e) {
         console.log(e);
         throw new UnauthorizedException();
      }
   }

   private static getIdCacheKey(id: string) {
      return `${CACHE_PREFIX}_${id}`;
   }

   /**
    * Assign cookies
    */
   setCookies(response: Response, accessToken: string, expiresIn?: number) {
      response.cookie(
         AUTH_COOKIE_ACCESS_TOKEN,
         accessToken,
         this.getCookieOptions(
            DateTime.now()
               .plus({ second: expiresIn || 3600 })
               .toJSDate(),
         ),
      );
   }

   /**
    * Invalid cookies
    */
   clearCookies(response: Response) {
      const cookieOptions = this.getCookieOptions(new Date(0), false);
      response.clearCookie(AUTH_COOKIE_ACCESS_TOKEN, cookieOptions);
   }

   private getCookieOptions(expiresOn: Date, signed = true): CookieOptions {
      const isDev = this.configService.get('NODE_ENV') === 'dev';
      return {
         domain: isDev ? 'localhost' : this.configService.get('DOMAIN'),
         httpOnly: true,
         secure: !isDev,
         signed,
         expires: expiresOn,
      };
   }
}
