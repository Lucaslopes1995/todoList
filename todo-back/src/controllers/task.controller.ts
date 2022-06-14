import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import TaskService from '../services/tasks.service';

class TaskController {
  constructor(private taskService = new TaskService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const tasks = await this.taskService.getAll();
    res.status(StatusCodes.OK).json(tasks);
  };

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const task = await this.taskService.getById(id);

    if (!task) {
      return res.status(StatusCodes.NOT_FOUND)
        .json({ message: 'Task not found!'});
    }

    res.status(StatusCodes.OK).json(task);
  }

  public create = async (req: Request, res: Response) => {
    const task = req.body;

    const taskCreated = await this.taskService.create(task);
    res.status(StatusCodes.CREATED).json(taskCreated);
  };

  public update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const task = req.body;
    await this.taskService.update(id, task);

    res.status(StatusCodes.NO_CONTENT).end();
  };

  public remove = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await this.taskService.remove(id);

    res.status(StatusCodes.OK).json({ message: 'Task deleted successfully' });
  };

}

export default TaskController;