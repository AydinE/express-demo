import { NextFunction, Request, Response } from "express";
import { Todo } from "../models/todo";
import { TodoService } from "../services/todoService";
import { ApiBaseController } from "./api-base-controller";

export class TodoController extends ApiBaseController {

    public getModelType(): string {
        return "Todo";
    }

    public initializeRoutes() {
        this.router.route(`${this.getPath()}`)
            .get(this.getAll.bind(this));

        this.router.route(`${this.getPath()}`)
            .post(this.create.bind(this));
    }

    public getPath() {
        return "/todo";
    }

    public async getAll(req: Request, res: Response, next: NextFunction) {
        const todoService = new TodoService();
        await todoService.getAll().then((todoes) => {
            if (todoes) {
                res.json(todoes);
            }
        }).catch((err) => {
            next(err);
        });
    }

    public async create(req: Request, res: Response, next: NextFunction) {
        const todo = new Todo(req.body);
        const todoService = new TodoService();

        await todoService.create(todo).then((newTodo) => {
          if (newTodo) {
            res.json(newTodo);
          }
        }).catch((err) => {
          next(err);
        });
    }

}
