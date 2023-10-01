import { Module } from '@nestjs/common';

import { QuoteService } from './services';

@Module({
   providers: [QuoteService],
   exports: [QuoteService],
})
export class QuoteModule {}
