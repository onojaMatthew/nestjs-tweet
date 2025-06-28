import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
