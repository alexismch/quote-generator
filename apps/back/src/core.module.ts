import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { APIModule } from './API/API.module';
import { DomainModule } from './Domain/Domain.module';

@Module({
   imports: [
      ConfigModule.forRoot({
         isGlobal: true,
         expandVariables: true,
         cache: true,
      }),
      APIModule,
      DomainModule,
   ],
})
export class CoreModule {}
