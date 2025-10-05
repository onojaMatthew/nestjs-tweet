import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from "@nestjs/common";
import { TweetService } from "./tweet.service";
import { CreateTweetDto } from "./dto/create-tweet.dto";
import { PaginationQueryDto } from "../common/pagination/dto/pagination-query.dto";

@Controller("tweets")
export class TweetsController {
  constructor(private tweetService: TweetService) {}

  @Get(":userId")
  public getTweets(
    @Param("userId", ParseIntPipe) userId: number,
    @Query() paginationQueryDto: PaginationQueryDto
    // @Query() getTweetQeryDto: GetTweetQueryDto // for intersected type(combining multiple dtos)
  ) {
    
    return this.tweetService.getTweets(userId, paginationQueryDto);
  }

  @Post()
  public createTweet(@Body() tweet: CreateTweetDto) {
    return this.tweetService.createTweet(tweet);
  }
}