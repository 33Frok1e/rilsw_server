import jwt from 'jsonwebtoken';
import { config } from '@/config/config';

export interface JWTPayload {
  studentId?: string;
  masterId?: string;
  iat?: number;
  exp?: number;
}

function getJWTSecret(): string {
  if (!config.JWT_SECRET) {
    throw new Error('Authentication failed');
  }
  return config.JWT_SECRET;
}

export function generateToken(studentId: string): string {
  return jwt.sign({ studentId }, getJWTSecret(), { expiresIn: '7d' });
}

export function generateMasterToken(masterId: string): string {
  return jwt.sign({ masterId }, getJWTSecret(), { expiresIn: '7d' });
}

export function verifyToken(token: string): JWTPayload {
  try {
    return jwt.verify(token, getJWTSecret()) as JWTPayload;
  } catch (error) {
    throw new Error('Invalid token');
  }
}

export function decodeToken(token: string): JWTPayload | null {
  try {
    return jwt.decode(token) as JWTPayload;
  } catch (error) {
    return null;
  }
} 