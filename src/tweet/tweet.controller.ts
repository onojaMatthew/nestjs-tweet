import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { TweetService } from "./tweet.service";
import { CreateTweetDto } from "./dto/create-tweet.dto";

@Controller("tweets")
export class TweetsController {
  constructor(private tweetService: TweetService) {}

  @Get(":userId")
  public getTweets(@Param("userId", ParseIntPipe) userId: number) {
    return this.tweetService.getTweets(userId);
  }

  @Post()
  public createTweet(@Body() tweet: CreateTweetDto) {
    return this.tweetService.createTweet(tweet);
  }
}