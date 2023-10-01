import { Module } from '@nestjs/common';

import { QuoteApiModule } from './Quote/quote-api.module';

@Module({ imports: [QuoteApiModule] })
export class APIModule {}
