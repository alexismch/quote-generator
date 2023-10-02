import { Controller, Post, UseInterceptors, Res, Body } from '@nestjs/common';
import { Response } from 'express';

import { AuthService } from '../../../Auth/services';
import { AuthCookieInterceptor } from '../../../Auth/interceptors';
import {
   AuthResponseDTO,
   LoginDTO,
   RegisterDTO,
   RegisterResponseDTO,
} from '../dtos';

@Controller({
   path: 'auth',
})
export class AuthController {
   constructor(private authService: AuthService) {}

   @Post('login')
   @UseInterceptors(AuthCookieInterceptor)
   async login(@Body() dto: LoginDTO) {
      const result = await this.authService.login(dto.login, dto.password);
      return new AuthResponseDTO(
         result.type,
         result.accessToken,
         result.expiresIn,
      );
   }

   @Post('logout')
   async logout(@Res() res: Response) {
      const result = await this.authService.logout(res);
      const response = new AuthResponseDTO(result.type);
      res.json(response);
   }

   @Post('register')
   async register(@Body() dto: RegisterDTO) {
      const result = await this.authService.register(
         dto.email,
         dto.username,
         dto.password,
      );
      return new RegisterResponseDTO(result);
   }
}
