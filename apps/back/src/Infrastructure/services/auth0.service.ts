import { Injectable } from '@nestjs/common';
import { AuthenticationClient, ManagementClient } from 'auth0';
import { ConfigService } from '@nestjs/config';

import { AuthError, AuthType } from '@quote-generator/shared';

import {
   AUTH0_CONNECTION,
   AUTH0_USER_ID_PREFIX,
} from '../infrastructure.constant';
import { Auth0Error } from '../enum';
import { ILoginAuthResponse } from '../../Auth/interfaces';

@Injectable()
export class Auth0Service {
   private authenticationClient: AuthenticationClient;
   private managementClient: ManagementClient;

   constructor(private configService: ConfigService) {
      const options = {
         domain: configService.get('AUTH0_DOMAIN'),
         clientId: configService.get('AUTH0_CLIENT_ID'),
         clientSecret: configService.get('AUTH0_CLIENT_SECRET'),
      };

      this.authenticationClient = new AuthenticationClient(options);
      this.managementClient = new ManagementClient(options);
   }

   async signIn(
      username: string,
      password: string,
   ): Promise<ILoginAuthResponse> {
      try {
         const { data } = await this.authenticationClient.oauth.passwordGrant({
            username,
            password,
            audience: this.configService.get('AUTH0_AUDIENCE'),
         });

         return {
            type: AuthType.TOKEN,
            accessToken: data.access_token,
            expiresIn: data.expires_in,
         };
      } catch {
         throw new Error(AuthError.INVALID_CREDENTIALS);
      }
   }

   async signUp(email: string, username: string, password: string) {
      try {
         const { data: user } = await this.authenticationClient.database.signUp(
            {
               email,
               username,
               password,
               connection: AUTH0_CONNECTION,
            },
         );

         return {
            ...user,
            id: `${AUTH0_USER_ID_PREFIX}${user.id}`,
         };
      } catch (e) {
         switch (e.message) {
            case Auth0Error.PASSWORD_TOO_WEAK:
               throw new Error(AuthError.PASSWORD_TOO_WEAK);
            default:
               throw new Error(AuthError.EMAIL_USERNAME_ALREADY_IN_USE);
         }
      }
   }

   async delete(id: string) {
      await this.managementClient.users.delete({ id });
   }

   async getUserById(id: string) {
      const response = await this.managementClient.users.get({ id });
      return response.data;
   }
}
