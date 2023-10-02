import { Module } from '@nestjs/common';
import { AuthController, UserAuthController } from './controllers';

import { AuthModule } from '../../Auth/Auth.module';

@Module({
   imports: [AuthModule],
   controllers: [AuthController, UserAuthController],
})
export class AuthApiModule {}
