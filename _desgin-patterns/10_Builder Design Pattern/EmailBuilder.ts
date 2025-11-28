import { Email } from "./Email";

export class EmailBuilder {
  private to: string = "";
  private subject: string = "";
  private body: string = "";
  private cc: string = "";
  private bcc: string = "";
  private attachment: string = "";

  constructor() {}

  // Getters
  getTo() {
    return this.to;
  }

  getSubject() {
    return this.subject;
  }

  getBody() {
    return this.body;
  }

  getCC() {
    return this.cc;
  }

  getBCC() {
    return this.bcc;
  }

  getAttachment() {
    return this.attachment;
  }

  // Setters
  setTo(val: string) {
    this.to = val;
    return this;
  }

  setSubject(val: string) {
    this.subject = val;
    return this;
  }

  setBody(val: string) {
    this.body = val;
    return this;
  }

  setCC(val: string) {
    this.cc = val;
    return this;
  }

  setBCC(val: string) {
    this.bcc = val;
    return this;
  }

  setAttachment(val: string) {
    this.attachment = val;
    return this;
  }

  build() {
    return new Email(this);
  }
}