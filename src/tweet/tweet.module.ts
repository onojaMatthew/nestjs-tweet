import { Module } from '@nestjs/common';
import { TweetsController } from './tweet.controller';
import { TweetService } from './tweet.service';
import { UserModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './tweet.entity';

@Module({
  controllers: [ TweetsController ],
  providers: [ TweetService],
  imports: [UserModule, TypeOrmModule.forFeature([Tweet])]
})
export class TweetModule {}
