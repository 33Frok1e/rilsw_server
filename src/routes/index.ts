import { Router } from 'express';
import authRoutes from './auth';
import certificateRoutes from './certificates';

const router = Router();

router.use('/auth', authRoutes);
router.use('/certificate', certificateRoutes);

export default router; 