import express from 'express';
import 'reflect-metadata';
import userRoutes from './router/userRoutes';
import { AppDataSource } from "./data-source"

const app = express();
const port = 3000;

app.use(express.json());
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

AppDataSource.initialize().then(async () => {
  console.log("Server is running(BDC)")

}).catch(error => console.log(error))