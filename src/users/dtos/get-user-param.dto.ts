import { Type } from "class-transformer";
import { IsBoolean, IsNumber } from "class-validator";

export class GetUserParamDto {
  @IsNumber()
  id: number
  
  @IsBoolean()
  @Type(() => Boolean)
  isMarried: boolean
}