import { Module } from '@nestjs/common';
import { TweetsController } from './tweet.controller';
import { TweetService } from './tweet.service';
import { UserModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './tweet.entity';
import { HashtagModule } from 'src/hashtag/hashtag.module';

@Module({
  controllers: [ TweetsController ],
  providers: [ TweetService],
  imports: [UserModule, HashtagModule, TypeOrmModule.forFeature([Tweet])]
})
export class TweetModule {}
