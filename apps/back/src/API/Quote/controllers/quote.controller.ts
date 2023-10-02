import { Controller, Get, UseGuards } from '@nestjs/common';

import { QuoteService } from '../../../Domain/Quote/services';
import { QuoteDTO } from '../dtos';
import { JwtAuthGuard } from '../../../Auth/guards';

@UseGuards(JwtAuthGuard)
@Controller({ path: 'quotes' })
export class QuoteController {
   constructor(private quoteService: QuoteService) {}

   @Get('random')
   async getOne(): Promise<QuoteDTO> {
      const quote = await this.quoteService.getRandom();
      return new QuoteDTO(quote);
   }
}
