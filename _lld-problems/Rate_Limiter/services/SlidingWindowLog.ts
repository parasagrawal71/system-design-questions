import { Mutex } from "async-mutex";
import { RateLimitConfig } from "../models/RateLimitConfig";
import { IRateLimiter } from "./IRateLimiter";

export class SlidingWindowLog extends IRateLimiter {
  private rateLimitConfig: RateLimitConfig;

  private requestLog: Map<string, number[]> = new Map(); // user id -> list of request time in order

  private locks = new Map(); // key -> Mutex

  constructor(rateLimitConfig: RateLimitConfig) {
    super();
    this.rateLimitConfig = rateLimitConfig;
  }

  async allowRequest(userId: string): Promise<boolean> {
    if (!this.locks.has(userId)) {
      this.locks.set(userId, new Mutex());
    }
    const lock = this.locks.get(userId);
    await lock.acquire();

    try {
      // first request
      if (!this.requestLog.has(userId)) {
        this.requestLog.set(userId, []);
      }

      // clear expired requests from left side
      const requestLog = this.requestLog.get(userId) || [];
      while (requestLog.length && Date.now() - requestLog[0] >= this.rateLimitConfig.getWindowSizeInSecs() * 1000) {
        requestLog.shift();
      }

      if (requestLog.length < this.rateLimitConfig.getMaxRequests()) {
        requestLog.push(Date.now()); // record this request
        this.requestLog.set(userId, requestLog);
        return true;
      }

      return false;
    } finally {
      lock.release();
    }
  }
}
