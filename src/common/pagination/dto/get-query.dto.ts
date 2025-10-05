import { IntersectionType } from "@nestjs/mapped-types";
import { IsDate, IsOptional } from "class-validator";
import { PaginationQueryDto } from "./pagination-query.dto";

class GetQueryBaseDto {

    @IsOptional()
    @IsDate()
    startdate?: Date;

    @IsOptional()
    @IsDate()
    enddate?: Date;
}

export class GetTweetQueryDto extends IntersectionType(
    GetQueryBaseDto, PaginationQueryDto
) {}