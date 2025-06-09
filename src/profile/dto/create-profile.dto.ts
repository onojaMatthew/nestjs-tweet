import { IsDate, IsNotEmpty,IsOptional, IsString, MaxLength, MinLength } from "class-validator"
import { Column } from "typeorm";


export class CreateProfileDto {
  @IsString({ message: 'First name must be of string characters' })
  @MinLength(3, { message: 'First name must be at least 3 characters long' })
  @IsOptional()
  firstName?: string;

  @IsString({ message: 'Last name must be of string characters' })
  @MinLength(3, { message: 'Last name must be at least 3 characters long' })
  @MaxLength(100)
  @IsOptional()
  lastName?: string;

  @IsString()
  @MaxLength(24)
  @IsOptional()
  username?: string;

  @IsString({ message: 'Gender field must be a string' })
  @IsOptional()
  @MaxLength(8)
  gender?: string;

  @IsOptional()
  @IsDate()
  dateOfBirth?: Date

  @IsString()
  @IsOptional()
  bio?: string

  @IsString()
  @IsOptional()
  profileImage?: string
}
