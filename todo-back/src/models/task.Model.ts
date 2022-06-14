import { Pool, ResultSetHeader } from 'mysql2/promise';
import Task from '../interfaces/task.interface';

export default class TaskModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Task[]> {
    const result = await this.connection
      .execute('SELECT * FROM tasks');
    const [rows] = result;
    // console.log(rows)
    return rows as Task[];
  }

  public async getById(id: number): Promise<Task> {
    const result = await this.connection
      .execute('SELECT * FROM tasks WHERE id=?', [id]);
    const [rows] = result;
    const [task] = rows as Task[];
    return task;
  }

  public async create(task: Task): Promise<Task> {
    const { name, done } = task;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO tasks (name, done) VALUES (?, ?)',
      [name, done],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...task };
  }

  public async update(id: number, task: Task) {
    const { name, done } = task;
    await this.connection.execute(
      'UPDATE tasks SET name=?, done=? WHERE id=?',
      [name, done, id]
    );
  }

  public async remove(id: number) {
    await this.connection.execute(
      'DELETE FROM tasks WHERE id=?',
      [id],
    );
  }
}