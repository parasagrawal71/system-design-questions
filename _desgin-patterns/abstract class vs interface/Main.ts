import { AbstractClass, AbstractClassChild } from "./AbstractClass";
import { InterfaceChild } from "./Interface";

(function main() {
  // ERROR: Cannot create an instance of an abstract class.
  // const obj = new AbstractClass();

  const obj: AbstractClass = new AbstractClassChild();
  obj.sayHi();
  obj.sayGoodMorning();
  obj.sayGoodBye();
  //   obj.byeText = "Bye"; // ERROR: Cannot assign to 'byeText' because it is a read-only property.
  console.log(`name: `, obj.getName());
  //   obj.getName = () => "Paras"; // ERROR: Cannot assign to 'getName' because it is a read-only property.
  //   console.log(`name: `, obj.getName());

  // ***************

  console.log("\n");
  const obj1 = new InterfaceChild();
  obj1.sayHi();
  obj1.sayGoodMorning();
  obj1.sayGoodBye();
  console.log(`name: `, obj1.user);
  obj1.user = "Paras";
  console.log(`name: `, obj1.user);
})();
