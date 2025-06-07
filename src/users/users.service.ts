import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users: { id: number, name: string, email: string, isMarried: boolean, gender: string }[] = [
    { id: 1, name: "Onyi", email: "onyi@gmail.com", isMarried: true, gender: "female" },
    { id: 2, name: "Mary", email: "mary@gmail.com", isMarried: true, gender: "female" },
    { id: 3, name: "Grace", email: "grace@gmail.com", isMarried: false, gender: "female" },
    { id: 4, name: "John", email: "john@gmail.com", isMarried: false, gender: "male" }
  ]

  getUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }

  createUser(user: { id: number, name: string, email: string, isMarried: boolean, gender: string }) {
    const newUser = this.users.push(user);
    return newUser;
  }
}
