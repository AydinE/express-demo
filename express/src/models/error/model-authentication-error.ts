import { ModelBaseError } from "./model-base-error";

export class ModelAuthenticationError extends ModelBaseError {
  constructor( modelType?: string, originalError?: Error) {
    super(`Authentication of ${modelType} failed.`, originalError);
  }
}

