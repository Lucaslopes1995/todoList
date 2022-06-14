import connection from '../models/connection';
import TaskModel from '../models/task.Model';
import Task from '../interfaces/task.interface';

class TaskService {
  public model: TaskModel;

  constructor() {
    this.model = new TaskModel(connection);
  }

  public async getAll(): Promise<Task[]> {
    const tasks = await this.model.getAll();
    return tasks;
  }

  public async getById(id: number): Promise<Task> {
    const task = await this.model.getById(id);
    return task;
  }

  public create(task: Task): Promise<Task> {
    return this.model.create(task);
  }

  public async update(id: number, task: Task): Promise<void> {
    const taskFound = await this.model.getById(id);

    return this.model.update(id, task);
  }

  public async remove(id: number): Promise<void> {
    const taskFound = await this.model.getById(id);

    this.model.remove(id);
  }

}


export default TaskService;