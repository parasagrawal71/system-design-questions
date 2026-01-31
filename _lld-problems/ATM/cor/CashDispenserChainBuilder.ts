import { FiveHundredDispenser } from "./FiveHundredDispenser";
import { OneHundredDispenser } from "./OneHundredDispenser";
import { TwoThousandDispenser } from "./TwoThousandDispenser";

export class CashDispenserChainBuilder {
  static buildChain() {
    const d1 = new TwoThousandDispenser();
    const d2 = new FiveHundredDispenser();
    const d3 = new OneHundredDispenser();

    d1.setNextDispenser(d2);
    d2.setNextDispenser(d3);
    return d1;
  }
}
