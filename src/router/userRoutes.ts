import { Router } from 'express';
import { getUsers, createUser, findById } from '../controlles/UserController';

const router = Router();

router.get('/', getUsers);

router.get('/:id', findById);

router.post('/', createUser);

export default router;
