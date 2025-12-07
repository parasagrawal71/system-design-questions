import { ModelTrainer } from "./ModelTrainer";

export class NeuralNetworkModelTrainer extends ModelTrainer {
  train(): void {
    console.log("Neural Network Model Trained");
  }

  evaluate(): void {
    console.log("Neural Network Model Evaluated");
  }

  preprocess(): void {
    console.log("Neural Network Model Preprocessed");
  }
}
