import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";

@Injectable()
export class TweetService {
  constructor(private readonly userService: UsersService) {}
  tweets: { text: String, date: Date, userId: Number}[] = [
    { text: "some tweets", date: new Date('2024-11-12'), userId: 1 },
    { text: "some other tweets", date: new Date('2024-08-12'), userId: 1 },
    { text: "some mored tweets", date: new Date('2023-11-12'), userId: 3 },
  ]
  getTweets(userId: Number) {
    const user = this.userService.getUserById(userId);
    const tweets = this.tweets.filter((tweet) => tweet.userId === userId)
    const response = tweets.map(t => {
      return {
        id: user?.id,
        name: user?.name,
        text: t.text,
        date: t.date
      }
    })
    
    return response;  
  }
}