import { AuthType, IAuthResponse } from '@quote-generator/shared';

export class AuthResponseDTO implements IAuthResponse {
   type: AuthType;

   accessToken?: string;

   expiresIn?: number;

   constructor(type: AuthType, accessToken?: string, expiresIn?: number) {
      this.type = type;
      this.accessToken = accessToken;
      this.expiresIn = expiresIn;
   }
}
