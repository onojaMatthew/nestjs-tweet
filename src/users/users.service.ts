import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(@Inject(forwardRef(() => AuthService)) private readonly authService: AuthService) {}
  users: { id: Number, name: string, email: string, isMarried: boolean, gender: string }[] = [
    { id: 1, name: "Onyi", email: "onyi@gmail.com", isMarried: true, gender: "female" },
    { id: 2, name: "Mary", email: "mary@gmail.com", isMarried: true, gender: "female" },
    { id: 3, name: "Grace", email: "grace@gmail.com", isMarried: false, gender: "female" },
    { id: 4, name: "John", email: "john@gmail.com", isMarried: false, gender: "male" }
  ]

  getUsers() {
    if (this.authService.isAuthenticated) {
      return this.users;
    }
  }

  getUserById(id: Number) {
    return this.users.find(user => user.id === id);
  }

  createUser(user: { id: Number, name: string, email: string, isMarried: boolean, gender: string }) {
    const newUser = this.users.push(user);
    return newUser;
  }
}
