import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { connectDB } from './config/database';
import routes from './routes';
import { config } from './config/config';

const app = express();

app.use(cors({ origin: true, credentials: true }));
// app.use(cors({
//   origin: process.env.CLIENT_URL || 'http://localhost:3000', // Your frontend URL
//   credentials: true
// }));
app.use(express.json());
app.use(cookieParser());

app.use('/api', routes);

const PORT = config.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}); 