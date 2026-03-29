import { Router } from 'express';
import { requireAuth } from '../../middlewares/auth.middleware.js';
import { syncUserController, updateProfileController } from './user.controller.js';

const userRouter = Router();

userRouter.post('/sync', requireAuth, syncUserController);
userRouter.put('/profile', requireAuth, updateProfileController);

export default userRouter;
