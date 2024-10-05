import { BasePizza } from "./Pizza/BasePizza";
import { FarmHouse } from "./Pizza/FarmHouse";
import { ExtraCheese } from "./Toppings/ExtraCheese";

(function main() {
  const pizza1: BasePizza = new ExtraCheese(new FarmHouse());
  console.log(pizza1.cost());
})();
