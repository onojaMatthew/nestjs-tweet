import { Module } from '@nestjs/common';
import { TweetsController } from './tweet.controller';
import { TweetService } from './tweet.service';

@Module({
  controllers: [ TweetsController ],
  providers: [ TweetService]
})
export class TweetModule {}
