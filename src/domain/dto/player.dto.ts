import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator'
import { CodiName } from '../enum/player.enum'

export class CreatePlayerDto {
  @IsNotEmpty()
  name: string

  @IsEmail()
  email: string

  @IsString()
  @MaxLength(11)
  phoneNumber: string

  @IsEnum(CodiName)
  category: CodiName
}
