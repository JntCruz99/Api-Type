import express from 'express';
import 'reflect-metadata';
import userRoutes from './router/userRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
