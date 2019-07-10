
export abstract class ModelBaseError extends Error {
  constructor(message?: string, public originalError?: Error) {
    super(message);
  }
}
