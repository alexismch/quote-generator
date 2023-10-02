import { Module } from '@nestjs/common';
import { AuthController } from './controllers';

import { AuthModule } from '../../Auth/Auth.module';

@Module({
   imports: [AuthModule],
   controllers: [AuthController],
})
export class AuthApiModule {}
