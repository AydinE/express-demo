import { ModelRetrievalError } from './model-retrieval-error';

export class ModelNotFoundError extends ModelRetrievalError {
  constructor(modelType: string, originalError?: Error) {
    super(`${modelType} could not be found`, originalError);
  }
}
