import { IQuoteResponse } from '@quote-generator/shared';

import { IQuote } from '../../../Domain/Quote/interfaces';

export class QuoteDTO implements IQuoteResponse {
   id: string;

   author: string;

   content: string;

   constructor(quote: IQuote) {
      this.id = quote._id;
      this.author = quote.author;
      this.content = quote.content;
   }
}
