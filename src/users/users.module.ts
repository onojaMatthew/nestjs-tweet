import { forwardRef, Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from './users.service';
import { AuthModule } from "../auth/auth.module";
import { User } from "./user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Profile } from "../profile/profile.entity";

@Module({
  controllers: [UsersController],
  providers: [UsersService ],
  exports: [UsersService],
  imports: [
    TypeOrmModule.forFeature([User, Profile]),
    forwardRef(() => AuthModule)
  ]
})
export class UserModule {}