import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/users/dtos/create-user.dto";
import { UsersService } from "src/users/users.service";

@Injectable()
export class TweetService {
  constructor(private readonly userService: UsersService) {}
  
  getTweets(userId: Number) {}
}