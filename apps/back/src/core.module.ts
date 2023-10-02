import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { APIModule } from './API/API.module';
import { DomainModule } from './Domain/Domain.module';
import * as process from 'process';

@Module({
   imports: [
      ConfigModule.forRoot({
         isGlobal: true,
         expandVariables: true,
         cache: true,
         load: [
            () => ({
               AUTH0_AUDIENCE: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
            }),
         ],
      }),
      APIModule,
      DomainModule,
   ],
})
export class CoreModule {}
