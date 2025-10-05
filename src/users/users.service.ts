import { BadRequestException, forwardRef, HttpException, HttpStatus, Inject, Injectable, RequestTimeoutException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { Profile } from '../profile/profile.entity';
import { ConfigService } from '@nestjs/config';
import { UserAlreadyExistsException } from '../CustomException/user-already-exists.exception';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
    private readonly configService: ConfigService
  ) {}
  
  public async getUsers() {
    const environment = this.configService.get<string>("ENV_MODE");
  
    try {
      return await this.userRepository.find({
      relations: {
        profile: true
      }
    });
    } catch (err) {
      if (err.code === "ECONNREFUSED") {
        throw new RequestTimeoutException("An error has occured. Please try again later", {
          description: "Could not connect to the database"
        })
      }
      console.log(err)
    }
  }

  public async getUserById(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: `Could not find a user with id: ${id}`,
        table: "user"
      }, HttpStatus.NOT_FOUND)
    }
    return user;
  }

  public async createUser(userDto: CreateUserDto) {
    try {
      userDto.profile = userDto.profile ?? {};
      const userExistsWithUsername = await this.userRepository.findOne({
        where: { username: userDto.username }
      });

      if (userExistsWithUsername) {
        throw new UserAlreadyExistsException("username", userDto.username)
      }

      const userExistsWithEmail = await this.userRepository.findOne({
        where: { email: userDto.email }
      })

      if (userExistsWithEmail) {
        throw new UserAlreadyExistsException("email", userDto.email)
      }

      let user = this.userRepository.create(userDto);

      return await this.userRepository.save(user);
    } catch (error) {
      if (error.code === "ECONNREFUSED") {
        throw new RequestTimeoutException("An error has occured. Please try again later", {
          description: "Could not connect to the database"
        })
      }
      throw error;
    }
  }

  public async deleteUser(id: number) {
    try {
      let user = await this.userRepository.delete(id);
      if (user.affected === 0) return "User not found";
      return { deleted: true }
    } catch (error) {
      if (error.code === "ECONNREFUSED") {
        throw new RequestTimeoutException("An error has occured. Please try again later", {
          description: "Could not connect to the database"
        })
      }
      console.log(error.code)
    }
  }
}
