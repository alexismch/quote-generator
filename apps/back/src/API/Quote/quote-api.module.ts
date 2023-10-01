import { Module } from '@nestjs/common';

import { QuoteController } from './controllers';
import { QuoteModule } from '../../Domain/Quote/quote.module';

@Module({
   imports: [QuoteModule],
   controllers: [QuoteController],
})
export class QuoteApiModule {}
