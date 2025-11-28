import { BarRaiserInterview } from "./BarRaiserInterview";
import { BehavioralInterview } from "./BehavioralInterview";
import { InterviewHandler } from "./InterviewHandler";
import { TechnicalInterview } from "./TechnicalInterview";

export class InterviewProcess {
  private chain: InterviewHandler;

  constructor() {
    // Building chain: Technical -> BarRaiser -> Behavioral
    this.chain = new TechnicalInterview();
    this.chain.setNext(new BarRaiserInterview()).setNext(new BehavioralInterview());
  }

  start(candidate: string): void {
    this.chain.handle(candidate);
  }
}
