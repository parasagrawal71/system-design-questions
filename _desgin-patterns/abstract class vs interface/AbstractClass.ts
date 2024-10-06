export abstract class AbstractClass {
  public name: string = "User";
  public readonly byeText: string = "";

  public abstract sayHi(): void;

  //   private abstract sayGoodMorning(): void; // ERROR: 'private' modifier cannot be used with 'abstract' modifier.
  public abstract sayGoodMorning(): void;

  public sayGoodBye(): void {
    console.log("Good Bye!");
  }

  // ERROR: 'readonly' modifier can only appear on a property declaration or index signature.
  //   public readonly getName(): string  {
  //     console.log("name: ", this.name);
  //     return this.name;
  //   };

  public readonly getName = (): string => {
    // Using readonly here, MAKES the getName READONLY
    return this.name;
  };
}

export class AbstractClassChild extends AbstractClass {
  // ERROR: Non-abstract class 'AbstractClassChild' does not implement inherited abstract member sayHi from class 'AbstractClass'.
  public sayHi(): void {
    console.log("Hi!");
  }

  // ERROR: Non-abstract class 'AbstractClassChild' does not implement inherited abstract member sayGoodMorning from class 'AbstractClass'.
  public sayGoodMorning(): void {
    console.log("Good Morning!");
  }

  // Using readonly here, DOESN'T MAKE the getName READONLY
  public getName = (): string => {
    return "Child";
  };
}

// ***********************************************************************
// ***********************************************************************
// ***********************************************************************

class Class1 {}
class Class2 {}
// class ChildClass extends Class1, Class2 {} // ERROR: Classes can only extend a single class.

abstract class AbstractClass1 {}
abstract class AbstractClass2 {}
// class AbstractChildClass extends AbstractClass1, AbstractClass2 {} // ERROR: Classes can only extend a single class.
