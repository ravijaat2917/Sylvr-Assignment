import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import connectDB from './config/db.js';
import UserRoutes from './Routes/user.Routes.js';
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

connectDB(process.env.DATABASE_URI);

app.use('/user', UserRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "./frontend/build")));
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
    
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App listen on Port : ${PORT}`);
})