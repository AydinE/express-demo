import * as express from "express";
import { Express, Router } from "express";
import { ApiBaseController } from "../controllers/api-base-controller";

export class ApiRoutes {
  private router: Router = express.Router();

  constructor(
    private app: Express,
    private controllers: ApiBaseController[],
  ) {
    this.addApiGlobalMiddlewares();
    this.initializeControllers(controllers);

    app.use("/api", this.router);
  }

  private addApiGlobalMiddlewares() {
    // make sure every response type is set to application/json
    this.router.use((req, res, next) => {
      res.type("application/json");
      next();
    });
  }

  private initializeControllers(controllers: ApiBaseController[]) {
    controllers.forEach((controller) => {
      this.router.use(controller.router);
    });
  }
}
