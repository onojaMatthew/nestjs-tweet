import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../users/users.module';
import { ConfigModule } from '@nestjs/config';
import authConfig from './config/auth.config';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UserModule),
    ConfigModule.forFeature(authConfig)
  ],
  exports: [AuthService]
})
export class AuthModule {}
