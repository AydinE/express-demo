import { ModelRetrievalError } from "../models/error";
import { ModelCreateError } from "../models/error/model-create-error";
import { ModelNotFoundError } from "../models/error/model-not-found-error";
import { Todo } from "../models/todo";
import { BaseService } from "./baseService";

export class TodoService extends BaseService {

    public getModelType(): string {
      return "Todo";
    }

    public async getAll() {
        return new Promise((resolve, reject) => {
            Todo.find((err, todoes) => {
                if (err) {
                    reject(new ModelRetrievalError(this.getModelType(), err));
                }
                if (todoes) {
                    resolve(todoes);
                } else {
                    reject(new ModelNotFoundError(this.getModelType()));
                }
            });
        });
    }

    public create(todo) {
        return new Promise((resolve, reject) => {
            Todo.create(todo, (createError, createdTodo) => {
                if (createError) {
                    reject(new ModelCreateError(this.getModelType(), createError));
                }
                if (createdTodo) {
                    resolve(createdTodo);
                } else {
                    reject(new ModelNotFoundError(this.getModelType()));
                }
            });
        });
    }

}
