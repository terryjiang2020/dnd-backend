import { Router } from 'express';
import { addUser, listUsers, signIn } from '../controllers/userController';

const router = Router();

router.get('/hello', (req, res) => {
  res.send('Hello World!');
});

// 创建用户的API
router.post('/users', addUser);

// 获取用户列表的API
router.get('/users', listUsers);

// 用户登录的API
router.post('/signin', signIn);

export default router;
