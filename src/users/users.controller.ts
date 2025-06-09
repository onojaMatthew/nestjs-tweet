import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { GetUserParamDto } from "./dtos/get-user-param.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";

@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  public getUsers() {
    return this.userService.getUsers();
  }

  @Get(":id")
  public getUserById(@Param("id?") id: number) {
    return this.userService.getUserById(id);
  }

  @Get(":id/:name/:gender")
  public getUserByName(@Param("id", ) param: any) {
    const { id, name, gender } = param;
    return this.userService.getUserById(+id);
  }

  @Post()
  public createUser(@Body() user: CreateUserDto) {
    this.userService.createUser(user)
    return `New user was created successfully!`
  }

  @Patch()
  public updateUser(@Body() user: UpdateUserDto) {
    return "User updated successfully!"
  }

  @Delete(":id")
  public deleteUser(@Param("id", ParseIntPipe) id: number) {
    console.log(id)
    return this.userService.deleteUser(id);
  }
}