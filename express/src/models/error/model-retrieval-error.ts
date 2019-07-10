
import { ModelBaseError } from './model-base-error'

export class ModelRetrievalError extends ModelBaseError {
  constructor(modelType: string, originalError?: Error) {
    super(`${modelType} could not be retrieved`, originalError);
  }
}
