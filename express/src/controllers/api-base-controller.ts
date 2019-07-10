import { ErrorRequestHandler, NextFunction, Request, Response, Router } from "express";
import * as express from "express";
import { ModelBaseError, ModelRetrievalError } from "../models/error/index";

interface ApiBaseControllerInterface {
  initializeRoutes(): void;
  getPath(): string;
}

export abstract class ApiBaseController implements ApiBaseControllerInterface {

  public router: Router;

  // tslint:disable-next-line: member-ordering
  public static errorHandlerMiddleware(): ErrorRequestHandler {
    return (err: any, req: Request, res: Response, next: NextFunction) => {
      if (err instanceof ModelBaseError) {
        let statusCode = 400;

        if (err instanceof ModelRetrievalError) {
          statusCode = 404;
        }

        res.status(statusCode).json({ message: err });
      } else {
        res.status(500).json( { message: err });
      }
      next();
    };
  }

  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }

  abstract initializeRoutes(): void;
  abstract getPath(): string;
  abstract getModelType(): string;

}
