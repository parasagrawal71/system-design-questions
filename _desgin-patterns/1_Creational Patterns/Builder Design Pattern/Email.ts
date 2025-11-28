import { EmailBuilder } from "./EmailBuilder";

export class Email {
  private to: string = ""; // CMD + . to generate getters and setters with get and set keywords
  private subject: string = "";
  private body: string = "";
  private cc: string = "";
  private bcc: string = "";
  private attachment: string = "";

  constructor(emailBuilder: EmailBuilder) {
    this.to = emailBuilder.getTo();
    this.subject = emailBuilder.getSubject();
    this.body = emailBuilder.getBody();
    this.cc = emailBuilder.getCC();
    this.bcc = emailBuilder.getBCC();
    this.attachment = emailBuilder.getAttachment();
  }

  // Getters
  public getTo() {
    return this.to;
  }

  public getSubject() {
    return this.subject;
  }

  public getBody() {
    return this.body;
  }

  public getCC() {
    return this.cc;
  }

  public getBCC() {
    return this.bcc;
  }

  public getAttachment() {
    return this.attachment;
  }

  // No setters for immutability
}
