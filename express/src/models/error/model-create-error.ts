import { ModelBaseError } from "./model-base-error";

export class ModelCreateError extends ModelBaseError {
  constructor(modelType: string, originalError?: Error) {
    super(`Creation of ${modelType} failed`, originalError);
  }
}
