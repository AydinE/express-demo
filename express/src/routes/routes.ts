import { Express } from "express";
import { TodoController } from "../controllers/todo-controller";
import { ApiRoutes } from "./api-routes";

export class Routes {

  public initialize(app: Express): void {
    const apiRoutes = new ApiRoutes(
      app, [
        new TodoController(),
      ],
    );
  }
}
