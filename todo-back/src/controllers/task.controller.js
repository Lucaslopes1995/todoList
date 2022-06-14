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
const http_status_codes_1 = require("http-status-codes");
const tasks_service_1 = __importDefault(require("../services/tasks.service"));
class TaskController {
    constructor(taskService = new tasks_service_1.default()) {
        this.taskService = taskService;
        this.getAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const tasks = yield this.taskService.getAll();
            res.status(http_status_codes_1.StatusCodes.OK).json(tasks);
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const task = yield this.taskService.getById(id);
            if (!task) {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND)
                    .json({ message: 'Task not found!' });
            }
            res.status(http_status_codes_1.StatusCodes.OK).json(task);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const task = req.body;
            const taskCreated = yield this.taskService.create(task);
            res.status(http_status_codes_1.StatusCodes.CREATED).json(taskCreated);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const task = req.body;
            yield this.taskService.update(id, task);
            res.status(http_status_codes_1.StatusCodes.NO_CONTENT).end();
        });
        this.remove = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            yield this.taskService.remove(id);
            res.status(http_status_codes_1.StatusCodes.OK).json({ message: 'Task deleted successfully' });
        });
    }
}
exports.default = TaskController;
