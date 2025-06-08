import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [UserModule, TweetModule, ProfileModule, AuthModule, TypeOrmModule.forRootAsync({
    imports: [],
    inject: [],
    useFactory: () => ({
      type: "postgres",
      // entities: [ User],
      autoLoadEntities: true,
      synchronize: true,
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "igochemat7@@",
      database: "nestjs"
    })
  }), ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
