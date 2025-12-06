import * as fs from "fs";
import { Mutex } from "async-mutex";
import { ILogFormatter } from "../formatter/ILogFormatter";
import { LogMessage } from "../model/LogMessage";
import { ILogAppender } from "./ILogAppender";

const mutex = new Mutex();

export class FileAppender implements ILogAppender {
  fileName: string = "";

  constructor(
    private readonly formatter: ILogFormatter,
    fileName: string,
  ) {
    this.fileName = fileName;
  }

  async append(message: LogMessage): Promise<void> {
    const release = await mutex.acquire();

    try {
      const formattedMsg = this.formatter.format(message);
      fs.appendFileSync(this.fileName, formattedMsg); // ** appendFile instead of writeFile
      fs.appendFileSync(this.fileName, "\n");
    } finally {
      release();
    }
  }
}
