import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "src/users/dtos/create-user.dto";
import { UsersService } from "src/users/users.service";
import { Tweet } from "./tweet.entity";
import { Repository } from "typeorm";
import { CreateTweetDto } from "./dto/create-tweet.dto";

@Injectable()
export class TweetService {
  constructor(
    @InjectRepository(Tweet)
    private readonly tweetRepository: Repository<Tweet>,
    private readonly userService: UsersService
  ) {}
  
  public async getTweets(userId: number) {
    let tweets = await this.tweetRepository.find({
      where: {
        user: { id: userId }
      },
      relations: { user: true }
    });

    return tweets;
  }

  public async createTweet(createTweetDto: CreateTweetDto) {
    let user = await this.userService.getUserById(createTweetDto.userId);
    if (!user) return "User not found";
    let tweet = await this.tweetRepository.create({...createTweetDto, user: user})
    return await this.tweetRepository.save(tweet)
  }
}