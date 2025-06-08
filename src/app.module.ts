import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';

@Module({
  imports: [UserModule, TweetModule, AuthModule, TypeOrmModule.forRootAsync({
    imports: [],
    inject: [],
    useFactory: () => ({
      type: "postgres",
      entities: [ User],
      synchronize: true,
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "igochemat7@@",
      database: "nestjs"
    })
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
