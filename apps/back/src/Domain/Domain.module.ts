import { Module } from '@nestjs/common';

import { QuoteModule } from './Quote/quote.module';

@Module({ imports: [QuoteModule] })
export class DomainModule {}
