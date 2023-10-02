import { IAuthUserResponse } from '@quote-generator/shared';

export class AuthUserDTO implements IAuthUserResponse {
   id: string;

   email: string;

   username?: string;

   constructor(data: IAuthUserResponse & { user_id: string }) {
      this.id = data.user_id;
      this.email = data.email;
      this.username = data.username;
   }
}
