import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { ConfigType } from '@nestjs/config';
import authConfig from './config/auth.config';

@Injectable()
export class AuthService {
  constructor(@Inject(forwardRef(() => UsersService)) 
  private readonly userService: UsersService,

  @Inject(authConfig.KEY)
  private readonly authConfiguration: ConfigType<typeof authConfig> // injecting module-specific configufations
) {}
  isAuthenticated = false;
  login(email: string, password: string) {
    console.log(this.authConfiguration.sharedSecret)
    return "User does not exist!"
  }
}
