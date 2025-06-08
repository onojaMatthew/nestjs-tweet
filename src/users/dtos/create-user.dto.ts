import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator"

export class CreateUserDto {
  
  @IsString({message: "First name must be of string characters"})
  @IsNotEmpty({ message: "First name field is required"})
  @MinLength(3, { message: "First name must be at least 3 characters long"})
  firstName: string

  @IsString({message: "Last name must be of string characters"})
  @IsNotEmpty({ message: "Last name field is required"})
  @MinLength(3, { message: "Last name must be at least 3 characters long"})
  lastName: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString({message: "Gender field must be a string"})
  @IsOptional()
  gender: string

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string
}