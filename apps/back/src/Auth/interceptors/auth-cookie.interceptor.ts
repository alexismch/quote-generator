import {
   CallHandler,
   ExecutionContext,
   Injectable,
   NestInterceptor,
} from '@nestjs/common';
import { Response } from 'express';
import { filter, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthType } from '@quote-generator/shared';

import { AuthService } from '../services';
import { ILoginAuthResponse } from '../interfaces';

@Injectable()
export class AuthCookieInterceptor implements NestInterceptor {
   constructor(private authService: AuthService) {}

   intercept(
      context: ExecutionContext,
      next: CallHandler<ILoginAuthResponse>,
   ): Observable<ILoginAuthResponse> | Promise<Observable<ILoginAuthResponse>> {
      return next.handle().pipe(
         filter((data) => data.type === AuthType.TOKEN),
         map((data) => {
            const ctx = context.switchToHttp();
            const response: Response = ctx.getResponse();

            this.authService.setCookies(
               response,
               data.accessToken,
               data.expiresIn,
            );
            data.type = AuthType.SUCCESS;
            delete data.accessToken;

            return data;
         }),
      );
   }
}
