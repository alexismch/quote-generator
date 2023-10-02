import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { CacheModule } from '@nestjs/cache-manager';

import { JwtStrategy } from './strategies';
import { CACHE_TTL } from './auth.constant';
import { InfrastructureModule } from '../Infrastructure/Infrastructure.module';
import { AuthService } from './services';

@Module({
   imports: [
      CacheModule.register({ ttl: CACHE_TTL }),
      PassportModule.register({ defaultStrategy: 'jwt' }),
      InfrastructureModule,
   ],
   providers: [JwtStrategy, AuthService],
   exports: [PassportModule, AuthService],
})
export class AuthModule {}
