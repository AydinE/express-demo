import * as config from "config";
import * as cors from "cors";
import * as express from "express";
import { Express } from "express";
import * as mongoose from "mongoose";
import { ApiBaseController } from "./controllers/api-base-controller";
import { Routes } from "./routes/routes";

class App {

  public app: Express;
  private mongoRetries = 0;
  private routes = new Routes();

  constructor() {
    this.app = express();

    this.connectMongoDB();

    this.initializeMiddleware();
    this.initializeRoutingMiddleware();
    this.initializeErrorHandlingMiddleware();

  }

  private connectMongoDB(): void {
    setTimeout(() => {
      this.mongooseConnectionHandler();
    }, 5000);
  }

  // Handler that will try to connect to mongo 5 times (with 5 second intervals) before failing.
  private mongooseConnectionHandler() {

    const connectionUri = `mongodb://${config.get("mongodb.host")}:${config.get("mongodb.port")}/${config.get("mongodb.options.dbName")}`;

    mongoose.connect(
      connectionUri,
      config.get("mongodb.options"),
      (err) => {
        if (err) {
          if ( this.mongoRetries < 5 ) {
            this.mongoRetries += 1;
            console.log("Retrying mongo connection in 5 seconds.");
            setTimeout(() => {
              this.mongooseConnectionHandler();
            }, 5000);
          } else {
            console.log("Mongoose failed to connect after 5 tries!" + err );
          }
        }
      },
    );
  }

  private initializeMiddleware(): void {

    // Add headers //
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: false }));

  }

  private initializeRoutingMiddleware(): void {
    this.routes.initialize(this.app);
  }

  private initializeErrorHandlingMiddleware(): void {
    this.app.use(ApiBaseController.errorHandlerMiddleware());
  }

}

export default new App().app;
