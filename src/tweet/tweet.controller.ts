import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { TweetService } from "./tweet.service";
import { CreateTweetDto } from "./dto/create-tweet.dto";
import { PaginationQueryDto } from "../common/pagination/dto/pagination-query.dto";
import { UpdateTweetDto } from "./dto/update-tweet.dto";
import { GetTweetQueryDto } from "./dto/get-tweet-query.dto";

@Controller("tweets")
export class TweetsController {
  constructor(private tweetService: TweetService) {}

  @Get(":userId")
  public getTweets(
    @Param("userId", ParseIntPipe) userId: number,
    @Query() paginationQueryDto: PaginationQueryDto
    // @Query() getTweetQeryDto: GetTweetQueryDto // for intersected type(combining multiple dtos)
  ) {
    // console.log(getTweetQeryDto)
    return this.tweetService.getTweets(userId, paginationQueryDto);
  }

  @Post()
  public createTweet(@Body() tweet: CreateTweetDto) {
    return this.tweetService.createTweet(tweet);
  }

  @Patch()
  public updateTweet(@Body() tweet: UpdateTweetDto) {
    return this.tweetService.updateTweet(tweet);
  }

  @Delete(":id")
  public deleteTweet(@Param("id", ParseIntPipe) id: number) {
    return this.tweetService.deleteTweet(id);
  }
}