import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  // This service is responsible for user logic
  getUsers() {
    return 'This action returns all users';
  }
}
