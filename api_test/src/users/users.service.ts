import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'john',
      password: 'changeme',
      email: 'john@example.com',
      isActive: true,
      events: []
    },
    {
      id: 2,
      username: 'maria',
      password: 'guess',
      email: 'maria@example.com',
      isActive: true,
      events: []
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}