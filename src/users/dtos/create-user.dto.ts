import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator"

export class CreateUserDto {
  @IsNumber()
  id: number

  @IsString({message: "Name must be of string characters"})
  @IsNotEmpty({ message: "Name field is required"})
  @MinLength(3, { message: "Name must be at least 3 characters long"})
  name: string

  @IsEmail()
  email: string

  @IsString({message: "Gender field must be a string"})
  @IsOptional()
  gender: string

  @IsBoolean()
  isMarried: boolean
}