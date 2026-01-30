import { Mutex } from "async-mutex";
import { RateLimitConfig } from "../models/RateLimitConfig";
import { IRateLimiter } from "./IRateLimiter";

/*
  ✅ Fixed Window Counter (Rolling / Anchored to first request of user)
  ❌ Fixed Window Counter (Wall-clock aligned)
*/
export class FixedWindow extends IRateLimiter {
  private rateLimitConfig: RateLimitConfig;

  private requestCount: Map<string, number> = new Map(); // user id -> request count
  private windowStart: Map<string, number> = new Map(); // user id -> window start in ms

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
      if (!this.windowStart.has(userId)) {
        this.windowStart.set(userId, Date.now());
        this.requestCount.set(userId, 1);
        return true;
      }

      const windowStartInMs = this.windowStart.get(userId) || 0;
      const requestCount = this.requestCount.get(userId) || 0;

      // window is expired
      if (this.rateLimitConfig.isExpired(windowStartInMs)) {
        this.windowStart.set(userId, Date.now());
        this.requestCount.set(userId, 1);
        return true;
      }

      // window is not expired but request count is not exceeded
      if (requestCount < this.rateLimitConfig.getMaxRequests()) {
        this.requestCount.set(userId, requestCount + 1);
        return true;
      }

      // window is not expired and request count is exceeded
      return false;
    } finally {
      lock.release();
    }
  }
}
