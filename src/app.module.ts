import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileModule } from './profile/profile.module';
import { HashtagModule } from './hashtag/hashtag.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import envValidation from './config/env.validation';

const ENV = process.env.NODE_ENV;
console.log(ENV, process.env.NODE_ENV);
@Module({
  imports: [
    UserModule, 
    TweetModule, 
    ProfileModule, 
    AuthModule, 
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig],
      envFilePath: !ENV ? ".env" : `.env.${ENV.trim()}`,
      // validationSchema: envValidation 
    }),
    TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      type: "postgres",
      autoLoadEntities: configService.get<boolean>("database.auto_load"),
      synchronize: configService.get<boolean>("database.sync"),
      host: configService.get<string>("database.host"),// "localhost",
      port: +configService.get("database.port"),
      username: configService.get<string>("database.username"),
      password: configService.get<string>("database.password"),
      database: configService.get<string>("database.name")
    })
  }), ProfileModule, HashtagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
