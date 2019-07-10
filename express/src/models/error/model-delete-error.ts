import { ModelBaseError } from "./model-base-error";

export class ModelDeleteError extends ModelBaseError {
  constructor(modelType: string, originalError?: Error) {
    super(`${modelType} could not be deleted`, originalError);
  }
}
