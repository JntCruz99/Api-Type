import { Router } from 'express';
import { getUsers } from '../controlles/UserController';

const router = Router();

router.get('/', getUsers);

export default router;
