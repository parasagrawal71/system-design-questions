import { InterviewHandler } from "./InterviewHandler";
import * as rl from "readline-sync";

export class TechnicalInterview extends InterviewHandler {
  handle(candidate: string): void {
    console.log("Technical round for: " + candidate);

    const score: number = rl.questionInt();
    if (score >= 70) {
      console.log(`${candidate} passed in ${TechnicalInterview.name}\n`);
      this.callNext(candidate);
      return;
    }

    console.log(`${candidate} failed in ${TechnicalInterview.name}\n`);
  }
}
