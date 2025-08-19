import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { connectDB } from './config/database';
import routes from './routes';
import { config } from './config/config';

const app = express();

// CORS configuration for Render.com deployment
app.use(cors({ 
  // origin: process.env.CLIENT_URL || 'http://localhost:3000',
  origin: true,
  credentials: true 
}));
app.use(express.json());
app.use(cookieParser());

// Health check endpoint for Render.com
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

app.use('/api', routes);

const PORT = config.PORT || 5000;

connectDB().then(() => {
  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
}); 