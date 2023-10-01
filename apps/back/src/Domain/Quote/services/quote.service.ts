import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { IQuote } from '../interfaces';

@Injectable()
export class QuoteService {
   async getRandom(): Promise<IQuote> {
      const response = await fetch('https://api.quotable.io/quotes/random');
      if (response.ok) {
         return (await response.json())[0];
      } else {
         throw new InternalServerErrorException();
      }
   }
}
