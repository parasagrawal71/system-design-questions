import { Mutex } from "async-mutex";
import { RateLimitConfig } from "../models/RateLimitConfig";
import { IRateLimiter } from "./IRateLimiter";

export class TokenBucket extends IRateLimiter {
  private rateLimitConfig: RateLimitConfig;

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
      // TODO: Implement
      return true;
    } finally {
      lock.release();
    }
  }
}
