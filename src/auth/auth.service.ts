import { Injectable, forwardRef, Inject, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { ConfigType } from '@nestjs/config';
import authConfig from './config/auth.config';
import { CreateUserDto } from '../users/dtos/create-user.dto';
import { LoginDto } from './dtos/login.dto';
import { HashingProvider } from './provider/hashing.provider';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService)) // For circular dependency
    // @Inject(UsersService) // No circular dependency
    private readonly userService: UsersService,

    @Inject(authConfig.KEY)
    private readonly authConfiguration: ConfigType<typeof authConfig>, // injecting module-specific configufations

    private readonly hashingProvider: HashingProvider,

    private readonly jwtService: JwtService,
  ) {}
  isAuthenticated = false;

  public async login(loginDto: LoginDto) {
    
    const user = await this.userService.findUserByUsername(loginDto.username);
    let isEqual: boolean = false;
    isEqual = await this.hashingProvider.comparePassword(loginDto.password, user.password);

    if (!isEqual) {
      throw new UnauthorizedException("Invalid credentials")
    }

    const token = await this.jwtService.signAsync(
      {
        sub: user.id,
        email: user.email
      }, {
        secret: this.authConfiguration.secret,
        expiresIn: this.authConfiguration.expiresIn,
        audience: this.authConfiguration.audience,
        issuer: this.authConfiguration.issuer
      }
    );

    return {
      token
    }
  }

  public async signup(createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto);
  }
}
