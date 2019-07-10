import { ModelBaseError } from "./model-base-error";

export class ModelUpdateError extends ModelBaseError {
  constructor(modelType: string, originalError?: Error) {
    super(`Update of ${modelType} failed`, originalError);
  }
}
