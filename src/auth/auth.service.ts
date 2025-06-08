import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(@Inject(forwardRef(() => UsersService)) private readonly userService: UsersService) {}
  isAuthenticated = false;
  login(email: string, password: string) {
    return "User does not exist!"
  }
}
