interface BaseServiceInterface {
  getModelType(): string;
}

export abstract class BaseService implements BaseServiceInterface {

  public abstract getModelType(): string;

}
