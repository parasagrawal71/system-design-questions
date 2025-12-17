// One way to implement Singleton Design Pattern: static property and static method
export class Logger {
  private static INSTANCE = new Logger();

  constructor() {}

  static getInstance(): Logger {
    return Logger.INSTANCE;
  }

  log(message: string) {
    console.log(message);
  }
}
