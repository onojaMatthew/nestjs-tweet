import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(@Inject(forwardRef(() => AuthService)) private readonly authService: AuthService) {}
  users: { firstName: string, lastName: string, email: string, password: string, gender: string }[] = [
    { firstName: "Onyi", lastName: "Gabriel", email: "onyi@gmail.com", gender: "female", password: "onyi" },
    { firstName: "Mary", lastName: "Anthony", email: "mary@gmail.com", gender: "female", password: "mary" },
    { firstName: "Grace", lastName: "Anthony",  email: "grace@gmail.com", gender: "female", password: "grace" },
    { firstName: "John", lastName: "Obute",  email: "john@gmail.com", gender: "male", password: "john" }
  ]

  getUsers() {
    if (this.authService.isAuthenticated) {
      return this.users;
    }
  }

  getUserById(id: Number) {
    // return this.users.find(user => user.id === id);
  }

  createUser(user: { email: string, gender: string, password: string, firstName: string, lastName: string }) {
    const newUser = this.users.push(user);
    return newUser;
  }
}
