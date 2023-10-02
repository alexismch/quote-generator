import { Controller, Get, UseGuards, Req } from '@nestjs/common';

import { JwtAuthGuard } from '../../../Auth/guards';
import { AuthUserDTO } from '../dtos';

@UseGuards(JwtAuthGuard)
@Controller({
   path: 'auth/user',
})
export class UserAuthController {
   @Get()
   async get(@Req() req: { user: any }) {
      return new AuthUserDTO(req.user);
   }
}
