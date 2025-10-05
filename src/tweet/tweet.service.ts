import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "../users/dtos/create-user.dto";
import { UsersService } from "../users/users.service";
import { Tweet } from "./tweet.entity";
import { Repository } from "typeorm";
import { CreateTweetDto } from "./dto/create-tweet.dto";
import { Hashtag } from "../hashtag/hashtag.entity";
import { HashtagService } from "../hashtag/hashtag.service";
import { PaginationQueryDto } from "../common/pagination/dto/pagination-query.dto";

@Injectable()
export class TweetService {
  constructor(
    @InjectRepository(Tweet)
    private readonly tweetRepository: Repository<Tweet>,  
    private readonly userService: UsersService,
    private readonly hashtagService: HashtagService
  ) {}
  
  public async getTweets(userId: number, paginationQueryDto: PaginationQueryDto) {
    const user = await this.userService.getUserById(userId);
    if (!user) throw new NotFoundException(`User with id ${userId} not found`)
    let tweets = await this.tweetRepository.find({
      where: {
        user: { id: userId }
      },
      relations: { user: true },
      skip: (paginationQueryDto.page! - 1) * paginationQueryDto.limit!,
      take: paginationQueryDto.limit
    });

    return tweets;
  }

  public async createTweet(createTweetDto: CreateTweetDto) {
    const user = await this.userService.getUserById(createTweetDto.userId);
    if (!user) return "User not found";
  
    const hashtagIds = createTweetDto.hashtags ?? [];
    const hashtags = await this.hashtagService.fetchHashtags(hashtagIds); // should return Hashtag[]
  
    const tweet = this.tweetRepository.create({ ...createTweetDto, user, hashtags});
  
    return await this.tweetRepository.save(tweet);
  }
  
}