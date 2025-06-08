import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(@Inject(forwardRef(() => UsersService)) private readonly userService: UsersService) {}
  isAuthenticated = false;
  login(email: string, password: string) {
    const userExists = this.userService.users.find(user => user.email === email);
    if (userExists) {
      this.isAuthenticated = true;
      return "MY_TOKEN"
    }
    return "User does not exist!"
  }
}
