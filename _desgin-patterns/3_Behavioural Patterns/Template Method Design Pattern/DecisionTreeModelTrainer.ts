import { ModelTrainer } from "./ModelTrainer";

export class DecisionTreeModelTrainer extends ModelTrainer {
  preprocess(): void {
    console.log("Decision Tree Model Preprocessed");
  }

  train(): void {
    console.log("Decision Tree Model Trained");
  }

  evaluate(): void {
    console.log("Decision Tree Model Evaluated");
  }

  // -- Making the trainPipeline readonly in the parent class, doesn't restrict overriding it. The below is working.
  //   trainPipeline = (): void => {
  //     console.log("trainPipeline overridden"); // This is working
  //   };
}
