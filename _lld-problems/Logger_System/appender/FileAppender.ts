import { ILogFormatter } from "../formatter/ILogFormatter";
import { LogMessage } from "../model/LogMessage";
import { ILogAppender } from "./ILogAppender";
import * as fs from "fs";

export class FileAppender implements ILogAppender {
  fileName: string = "";

  constructor(
    private readonly formatter: ILogFormatter,
    fileName: string,
  ) {
    this.fileName = fileName;
  }

  append(message: LogMessage): void {
    const formattedMsg = this.formatter.format(message);
    fs.writeFileSync(this.fileName, formattedMsg);
  }
}
