import { IntersectionType } from "@nestjs/mapped-types";
import { IsDate, IsOptional } from "class-validator";
import { PaginationQueryDto } from "../../common/pagination/dto/pagination-query.dto";

class GetTweetBaseQery {
    @IsOptional()
    @IsDate()
    startdate?: Date;

    @IsOptional()
    @IsDate()
    enddate?: Date;
}

export class GetTweetQueryDto extends IntersectionType(
    GetTweetBaseQery, PaginationQueryDto
) {}