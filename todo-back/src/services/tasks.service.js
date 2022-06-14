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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../models/connection"));
const task_Model_1 = __importDefault(require("../models/task.Model"));
class TaskService {
    constructor() {
        this.model = new task_Model_1.default(connection_1.default);
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield this.model.getAll();
            return tasks;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield this.model.getById(id);
            return task;
        });
    }
    create(task) {
        return this.model.create(task);
    }
    update(id, task) {
        return __awaiter(this, void 0, void 0, function* () {
            const taskFound = yield this.model.getById(id);
            return this.model.update(id, task);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const taskFound = yield this.model.getById(id);
            this.model.remove(id);
        });
    }
}
exports.default = TaskService;
