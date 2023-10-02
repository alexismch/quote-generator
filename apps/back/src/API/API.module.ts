import { Module } from '@nestjs/common';

import { QuoteApiModule } from './Quote/quote-api.module';
import { AuthApiModule } from './Auth/auth-api.module';

@Module({ imports: [AuthApiModule, QuoteApiModule] })
export class APIModule {}
