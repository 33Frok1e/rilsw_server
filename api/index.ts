import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { connectDB } from '../src/config/database';
import routes from '../src/routes';

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api', routes);

// Connect to database without exiting process
connectDB().then(() => {
  console.log('Database connected successfully');
}).catch((error) => {
  console.error('Database connection failed:', error);
  // Don't exit process in serverless environment
});

// Export for Vercel serverless function
export default app;
