import { IQuote } from '../../../Domain/Quote/interfaces';

export class QuoteDTO {
   id: string;

   author: string;

   content: string;

   constructor(quote: IQuote) {
      this.id = quote._id;
      this.author = quote.author;
      this.content = quote.content;
   }
}
