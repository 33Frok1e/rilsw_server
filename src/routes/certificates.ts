import { Router } from 'express';
import { verifyCertificate } from '@/controllers/certificateController';

const router = Router();

// GET /certificates/verify/:id
router.get('/verify/:id', verifyCertificate);

export default router; 