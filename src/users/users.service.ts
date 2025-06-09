import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { Profile } from 'src/profile/profile.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>
  ) {}
  
  getUsers() {
    return this.userRepository.find();
  }

  getUserById(id: Number) {
    // return this.userRepository.findOneBy({  where: })
  }

  public async createUser(userDto: CreateUserDto) {
    userDto.profile = userDto.profile ?? {};
    let user = this.userRepository.create(userDto);

    return await this.userRepository.save(user);
  }
}
