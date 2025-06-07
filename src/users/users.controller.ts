import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { GetUserParamDto } from "./dtos/get-user-param.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";

@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers(@Query("limit", new DefaultValuePipe(10), ParseIntPipe, ) limit: number, @Query("page", new DefaultValuePipe(1), ParseIntPipe) page: number) {
    console.log(limit, page)
    return this.userService.getUsers();
  }

  @Get(":id")
  getUserById(@Param("id?") id: Number) {
    return this.userService.getUserById(id);
  }

  @Get(":id/:name/:gender")
  getUserByName(@Param("id", ) param: any) {
    const { id, name, gender } = param;
    console.log(param)
    return this.userService.getUserById(+id);
  }

  @Post()
  createUser(@Body() user: CreateUserDto) {
    this.userService.createUser(user);
    return `New user was created successfully!`
  }

  @Patch()
  updateUser(@Body() user: UpdateUserDto) {
    console.log(user)
    return "User updated successfully!"
  }
}