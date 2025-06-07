import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { TweetService } from "./tweet.service";

@Controller("tweets")
export class TweetsController {
  constructor(private tweetService: TweetService) {}

  @Get(":userId")
  getTweets(@Param("userId", ParseIntPipe) userId: number) {
    return this.tweetService.getTweets(userId);
  }
}