import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator"
import { CreateProfileDto } from "src/profile/dto/create-profile.dto"

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(100)
  email: string

  @IsString()
  @IsNotEmpty()
  @MaxLength(24)
  username: string

  @IsOptional()
  profile?: CreateProfileDto;

  @IsString({message: "Gender field must be a string"})
  @IsOptional()
  @MaxLength(8)
  gender: string

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(100)
  password: string
}