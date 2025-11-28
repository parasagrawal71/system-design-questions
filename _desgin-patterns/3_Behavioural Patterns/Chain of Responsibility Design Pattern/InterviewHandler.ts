export abstract class InterviewHandler {
  next: InterviewHandler | null = null;

  setNext(next: InterviewHandler): InterviewHandler {
    this.next = next;
    return this.next;
  }

  callNext(candidate: string): void {
    if (this.next) {
      this.next.handle(candidate);
    } else {
      console.log(candidate + " passed all interviews rounds.");
    }
  }

  abstract handle(candidate: string): void;
}
