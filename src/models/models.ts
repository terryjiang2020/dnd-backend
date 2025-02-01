import bcrypt from 'bcrypt';
import { User } from '../types';

const users: User[] = [];
let nextId = 1;

export const createUser = (
  name: string,
  email: string,
  password: string,
): User => {
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser: User = { id: nextId++, name, email, password: hashedPassword };
  users.push(newUser);
  return newUser;
};

export const getUsers = (): User[] => {
  return users;
};

export const signIn = (email: string, password: string): User | null => {
  const user = findUserByEmail(email);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return null;
  }
  return user;
};

export const findUserByEmail = (email: string): User | undefined => {
  return users.find((user) => user.email === email);
};
