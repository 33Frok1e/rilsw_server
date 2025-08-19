import mongoose from 'mongoose';
import { config } from './config';

export async function connectDB() {
  try {
    if (!config.MONGODB_URI) {
      throw new Error('MONGODB_URI is not configured');
    }
    await mongoose.connect(config.MONGODB_URI);
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    throw err;
  }
} 