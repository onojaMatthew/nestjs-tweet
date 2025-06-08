import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator"
import { CreateProfileDto } from "src/profile/dto/create-profile.dto"

export class CreateUserDto {
  
  @IsString({message: "First name must be of string characters"})
  @IsNotEmpty({ message: "First name field is required"})
  @MinLength(3, { message: "First name must be at least 3 characters long"})
  firstName: string

  @IsString({message: "Last name must be of string characters"})
  @IsNotEmpty({ message: "Last name field is required"})
  @MinLength(3, { message: "Last name must be at least 3 characters long"})
  @MaxLength(100)
  lastName: string

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(100)
  email: string

  @IsString()
  @IsNotEmpty()
  @MaxLength(24)
  username: string

  @IsOptional()
  profile?: CreateProfileDto

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