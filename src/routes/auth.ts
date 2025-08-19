import { Router } from 'express';
import { login, me, createStudent, editStudent, logout, masterLogin } from '@/controllers/authController';
import { validateLogin } from '@/middleware/auth.middleware';

const router = Router();

router.post('/master-login', masterLogin);

// POST /auth/login
router.post('/login', validateLogin, login);
router.post('/logout', validateLogin, logout);

// POST /auth/create-student
router.post('/create-student', validateLogin, createStudent);
router.post('/edit-student', validateLogin, editStudent);

// GET /auth/me
router.get('/me', validateLogin, me);

export default router; 