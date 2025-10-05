import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateHashtagDto } from './dto/create-hashtag.dto';
import { HashtagService } from './hashtag.service';

@Controller('hashtag')
export class HashtagController {
  constructor(private readonly hashtagService: HashtagService) {}
  @Post()
  public createHashtag(@Body() createHashtagDto: CreateHashtagDto) {
    return this.hashtagService.createHashtag(createHashtagDto);
  }

  @Get("all")
  public fetchAllHashtags() {
    return this.hashtagService.fetchAllHashtags();
  }
  @Get()
  public fetchHashtags (hashtagIds: number[]) {
    return this.hashtagService.fetchHashtags(hashtagIds);
  }

  @Delete(":id")
  public deleteHashtag(@Param("id", ParseIntPipe) id: number) {
    return this.hashtagService.deleteHashtag(id);
  }

  @Delete("softdelete/:id")
  public softDeleteHashtag(@Param("id", ParseIntPipe) id: number) {
    return this.hashtagService.softDeleteHashtag(id);
  }
}
