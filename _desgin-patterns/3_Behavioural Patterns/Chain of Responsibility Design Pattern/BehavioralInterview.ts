import { InterviewHandler } from "./InterviewHandler";
import * as rl from "readline-sync";

export class BehavioralInterview extends InterviewHandler {
  handle(candidate: string): void {
    console.log("Behavioral round for: " + candidate);

    const score: number = rl.questionInt();
    if (score >= 60) {
      console.log(`${candidate} passed in ${BehavioralInterview.name}\n`);
      this.callNext(candidate);
      return;
    }

    console.log(`${candidate} failed in ${BehavioralInterview.name}\n`);
  }
}
