import { Module } from '@nestjs/common';
import { TweetsController } from './tweet.controller';
import { TweetService } from './tweet.service';
import { UserModule } from 'src/users/users.module';

@Module({
  controllers: [ TweetsController ],
  providers: [ TweetService],
  imports: [UserModule]
})
export class TweetModule {}
