import express, { Request, Response } from 'express';
import cors from 'cors'
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';
// import TasksRoutes from './routes/task.routes';
import TasksController from './controllers/task.controller';

const PORT = 3001;

const app: express.Application = express();

app.use(express.json());

app.use(cors());

const tasksController = new TasksController();

app.get('/tasks', tasksController.getAll);
app.get('/tasks/:id', tasksController.getById);
app.post('/tasks/', tasksController.create);
app.put('/tasks/:id', tasksController.update);
app.delete('/tasks/:id',tasksController.remove);


// app.use(TasksRoutes);


app.listen(PORT,()=>console.log("ouvindo na porta "+PORT))

