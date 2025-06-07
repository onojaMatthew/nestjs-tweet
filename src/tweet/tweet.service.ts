import { Injectable } from "@nestjs/common";

@Injectable()
export class TweetService {
  tweets: { text: String, date: Date, userId: Number}[] = [
    { text: "some tweets", date: new Date('2024-11-12'), userId: 1 },
    { text: "some other tweets", date: new Date('2024-08-12'), userId: 1 },
    { text: "some mored tweets", date: new Date('2023-11-12'), userId: 1 },
  ]
  getTweets(userId: Number) {
    return userId;  
  }
}