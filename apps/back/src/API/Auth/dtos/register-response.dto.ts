import { IRegisterResponse } from '@quote-generator/shared';

export class RegisterResponseDTO implements IRegisterResponse {
   id: string;

   email: string;

   username?: string;

   constructor(data: IRegisterResponse) {
      this.id = data.id;
      this.email = data.email;
      this.username = data.username;
   }
}
