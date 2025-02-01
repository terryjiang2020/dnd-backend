import { Request, Response } from 'express';
import { createUser, getUsers, signIn as modelSignIn } from '../models/models';

export const addUser = (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).send('Name, email, and password are required');
  } else {
    const newUser = createUser(name, email, password);
    res.status(201).json(newUser);
  }
};

export const listUsers = (req: Request, res: Response) => {
  const users = getUsers();
  res.json(users);
};

export const signIn = (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send('Email and password are required');
    return;
  }

  const isAuthenticated = modelSignIn(email, password);
  if (!isAuthenticated) {
    res.status(401).send('Invalid email or password');
    return;
  }

  res.status(200).send('Sign in successful');
};
