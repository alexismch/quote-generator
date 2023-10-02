import { AuthType } from '../enum';

export interface IAuthResponse {
   type: AuthType;

   accessToken?: string;

   expiresIn?: number;
}
