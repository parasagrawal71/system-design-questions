import { DecisionTreeModelTrainer } from "./DecisionTreeModelTrainer";
import { ModelTrainer } from "./ModelTrainer";
import { NeuralNetworkModelTrainer } from "./NeuralNetworkModelTrainer";

(function () {
  const neuralNetworkModelTrainer: ModelTrainer = new NeuralNetworkModelTrainer();
  neuralNetworkModelTrainer.trainPipeline();
  console.log(`\n`);

  const decisionTreeModelTrainer: ModelTrainer = new DecisionTreeModelTrainer();
  decisionTreeModelTrainer.trainPipeline();
})();
