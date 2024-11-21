import { BasePizza } from "./Pizza/BasePizza";
import { FarmHouse } from "./Pizza/FarmHouse";
import { ExtraCheese } from "./Toppings/ExtraCheese";
import { Mushroom } from "./Toppings/Mushroom";

(function main() {
  const pizza1: BasePizza = new ExtraCheese(new FarmHouse());
  console.log(pizza1.cost());

  const pizza2: BasePizza = new Mushroom(new ExtraCheese(new FarmHouse()));
  console.log(pizza2.cost());
})();
