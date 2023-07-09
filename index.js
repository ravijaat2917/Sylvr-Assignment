import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import connectDB from './config/db.js';
import UserRoutes from './Routes/user.Routes.js';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

connectDB(process.env.DATABASE_URI);

app.use('/user' , UserRoutes)

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App listen on Port : ${PORT}`);
})