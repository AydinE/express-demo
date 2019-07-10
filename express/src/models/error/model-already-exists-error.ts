import { ModelBaseError } from "./model-base-error";

export class ModelAlreadyExistsError extends ModelBaseError {
  constructor(modelType?: string, originalError?: Error) {
    super(`Creation of ${modelType} failed. Already exists.`, originalError);
  }
}
