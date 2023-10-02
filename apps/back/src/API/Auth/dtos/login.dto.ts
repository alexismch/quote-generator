import { IsString } from 'class-validator';

import { ILoginBody } from '@quote-generator/shared';

export class LoginDTO implements ILoginBody {
   @IsString()
   login: string;

   @IsString()
   password: string;
}
