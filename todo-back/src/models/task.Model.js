"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class TaskModel {
    constructor(connection) {
        this.connection = connection;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection
                .execute('SELECT * FROM tasks');
            const [rows] = result;
            // console.log(rows)
            return rows;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection
                .execute('SELECT * FROM tasks WHERE id=?', [id]);
            const [rows] = result;
            const [task] = rows;
            return task;
        });
    }
    create(task) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, done } = task;
            const result = yield this.connection.execute('INSERT INTO tasks (name, done) VALUES (?, ?)', [name, done]);
            const [dataInserted] = result;
            const { insertId } = dataInserted;
            return Object.assign({ id: insertId }, task);
        });
    }
    update(id, task) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, done } = task;
            yield this.connection.execute('UPDATE tasks SET name=?, done=? WHERE id=?', [name, done, id]);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute('DELETE FROM tasks WHERE id=?', [id]);
        });
    }
}
exports.default = TaskModel;
