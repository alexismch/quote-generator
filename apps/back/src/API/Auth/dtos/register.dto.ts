import { IsEmail, IsString } from 'class-validator';

import { IRegisterBody } from '@quote-generator/shared';

export class RegisterDTO implements IRegisterBody {
   @IsEmail()
   @IsString()
   email: string;

   @IsString()
   username: string;

   @IsString()
   password: string;
}
