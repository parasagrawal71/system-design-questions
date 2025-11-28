import { InterviewHandler } from "./InterviewHandler";
import * as rl from "readline-sync";

export class BarRaiserInterview extends InterviewHandler {
  handle(candidate: string): void {
    console.log("BarRaiser round for: " + candidate);

    const score: number = rl.questionInt();
    if (score >= 90) {
      console.log(`${candidate} passed in ${BarRaiserInterview.name}\n`);
      this.callNext(candidate);
      return;
    }

    console.log(`${candidate} failed in ${BarRaiserInterview.name}\n`);
  }
}
