import { v4 as uuidv4 } from 'uuid';

import User from '../models/User';

class UsersRepository {
  private storage: User[];

  constructor() {
    this.storage = [];
  }

  public list(): User[] {
    return this.storage;
  }

  public findById(id: string): User | undefined {
    return this.storage.find(user => user.id === id);
  }

  public findByEmail(email: string): User | undefined {
    return this.storage.find(user => user.email === email);
  }

  public create(name: string, email: string): User {
    const user = {
      id: uuidv4(),
      name,
      email,
    };

    this.storage.push(user);

    return user;
  }

  public delete(id: string): User {
    const userIndex = this.storage.findIndex(user => user.id === id);

    const userDeleted = this.storage.splice(userIndex, 1);

    return userDeleted[0];
  }
}

export default UsersRepository;
