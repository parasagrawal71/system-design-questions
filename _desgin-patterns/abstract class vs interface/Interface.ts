export interface Interface {
  //   public user: string; // ERROR: 'public' modifier cannot appear on a type member.
  //   readonly user: string; // DOESN'T MAKE user READONLY

  //   public sayHi(): void; // ERROR: 'public' modifier cannot appear on a type member.
  sayHi(): void;

  sayGoodMorning(): void;

  sayGoodBye(): void;
  // ERROR: ';' expected.
  //   public sayGoodBye(): void {
  //     console.log("Good Bye!");
  //   }
}

/**
 * ERROR: Type 'InterfaceChild' is missing the following properties from type 'Interface': user, sayHi,
 * sayGoodMorning, sayGoodBye
 */
export class InterfaceChild implements Interface {
  public user: string = "User";
  //   public readonly user: string = "User"; // IT MAKES user READONLY

  public sayHi(): void {
    console.log("Hi!");
  }

  public sayGoodMorning(): void {
    console.log("Good Morning!");
  }

  public sayGoodBye(): void {
    console.log("Good Bye!");
  }
}

// ***********************************************************************
// ***********************************************************************
// ***********************************************************************

interface Interface1 {}
interface Interface2 {}
class ChildClass implements Interface1, Interface2 {}
