import { Injectable, ParseIntPipe } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "src/users/dtos/create-user.dto";
import { UsersService } from "src/users/users.service";
import { Tweet } from "./tweet.entity";
import { In, Repository } from "typeorm";
import { CreateTweetDto } from "./dto/create-tweet.dto";
import { Hashtag } from "src/hashtag/hashtag.entity";
import { HashtagService } from "src/hashtag/hashtag.service";
import { UpdateTweetDto } from "./dto/update-tweet.dto";

@Injectable()
export class TweetService {
  constructor(
    @InjectRepository(Tweet)
    private readonly tweetRepository: Repository<Tweet>, 
    private readonly userService: UsersService,
    private readonly hashtagService: HashtagService
  ) {}
  
  public async getTweets(userId: number) {
    let tweets = await this.tweetRepository.find({
      where: {
        user: { id: userId }
      },
      relations: { user: true, hashtags: true }
    });

    return tweets;
  }

  public async createTweet(createTweetDto: CreateTweetDto) {
    const user = await this.userService.getUserById(createTweetDto.userId);
    if (!user) return "User not found";
  
    const hashtagIds = createTweetDto.hashtags ?? [];
    const hashtags = await this.hashtagService.fetchHashtags(hashtagIds); 
  
    const tweet = this.tweetRepository.create({ ...createTweetDto, user, hashtags});
  
    return await this.tweetRepository.save(tweet);
  }

  public async updateTweet(updateTweet: UpdateTweetDto) {
    let hashtags = await this.hashtagService.fetchHashtags(updateTweet.hashtags ?? []);
    let tweet = await this.tweetRepository.findOneBy({ id: updateTweet.id });

    if (!tweet) {
      return "Tweet not found"
    }

    tweet.text = updateTweet.text ?? tweet.text;
    tweet.image = updateTweet.image ?? tweet.image;
    tweet.hashtags = hashtags;

    return await this.tweetRepository.save(tweet);
  }

  public async deleteTweet(id: number) {
    return await this.tweetRepository.delete({id});
  }
}