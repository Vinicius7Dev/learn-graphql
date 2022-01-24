import UsersRepository from '../repositories/UsersRepository';
import User from '../models/User';

const usersRepository = new UsersRepository();

class UsersResolver {
  public users(): User[] {
    return usersRepository.list();
  }
  
  public user(_: any, { id }: { id: string }): User | undefined {
    return usersRepository.findById(id);
  }
  
  public createUser(_: any, {name, email}: {name: string, email: string}): User | undefined {
    const userWithSameEmail = usersRepository.findByEmail(email);

    if(!userWithSameEmail) {
      return usersRepository.create(name, email);
    }
  }

  public deleteUser(_: any, { id }: { id: string }) {
    const idExists = usersRepository.findById(id);

    if(idExists) {
      return usersRepository.delete(id);
    }
  }
}

export default UsersResolver;
