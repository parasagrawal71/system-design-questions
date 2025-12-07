export abstract class ModelTrainer {
  protected load(path: string): void {
    console.log(`[ModelTrainer] Loading model from ${path}`);
  }

  protected abstract preprocess(): void;

  protected abstract train(): void;

  protected abstract evaluate(): void;

  protected save(path: string): void {
    console.log(`[ModelTrainer] Saving model to ${path}`);
  }

  // ***Defines the order of execution. trainPipeline is the template method
  public readonly trainPipeline = (): void => {
    // using readonly here doesn't restrict overriding
    this.load("/from/path");

    this.preprocess();

    this.train();

    this.evaluate();

    this.save("/to/path");
  };
}
