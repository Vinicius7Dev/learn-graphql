// Os Resolvers são como os Controllers

import UsersResolver from './UsersResolver';

const usersResolver = new UsersResolver();

export default {
  Query: {
    users: usersResolver.users,
    user: usersResolver.user,
  },

  Mutation: {
    createUser: usersResolver.createUser,
    deleteUser: usersResolver.deleteUser,
  }
};
