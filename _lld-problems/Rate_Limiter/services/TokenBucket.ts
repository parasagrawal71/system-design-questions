import { Mutex } from "async-mutex";
import { RateLimitConfig } from "../models/RateLimitConfig";
import { IRateLimiter } from "./IRateLimiter";

export class TokenBucket extends IRateLimiter {
  private rateLimitConfig: RateLimitConfig;

  private tokenBucket: Map<string, number> = new Map(); // user id -> tokens
  private lastRefillTime: Map<string, number> = new Map(); // user id -> last refill time in ms

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
      // Refill tokens
      this.refill(userId);

      // Check tokens
      const tokens = this.tokenBucket.get(userId)!;
      if (tokens > 0) {
        this.tokenBucket.set(userId, tokens - 1); // use a token
        return true;
      }

      return false;
    } finally {
      lock.release();
    }
  }

  // 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14
  // refill rate = windowSize / maxRequests = 10 / 3 = 3 (i.e., 1 token every 3 seconds)
  refill(userId: string) {
    const currentTimeInMs = Date.now();

    // if first request, initialize state
    if (!this.tokenBucket.has(userId)) {
      this.tokenBucket.set(userId, this.rateLimitConfig.getMaxRequests());
      this.lastRefillTime.set(userId, currentTimeInMs);
      return;
    }

    const refillRate = this.getRefillRate();

    const lastRefillTime = this.lastRefillTime.get(userId) || currentTimeInMs;
    const elapsedSeconds = (currentTimeInMs - lastRefillTime) / 1000;
    const tokensToRefill = Math.floor(elapsedSeconds / refillRate);

    // refill tokens and update last refill time
    this.tokenBucket.set(
      userId,
      Math.min(this.rateLimitConfig.getMaxRequests(), (this.tokenBucket.get(userId) || 0) + tokensToRefill),
    );
    if (tokensToRefill > 0) this.lastRefillTime.set(userId, currentTimeInMs);
  }

  // compute refill rate
  getRefillRate(): number {
    // const refillRate = Math.floor(this.rateLimitConfig.getWindowSizeInSecs() / this.rateLimitConfig.getMaxRequests());
    const refillRate = 3; // 1 token every 3 seconds

    return refillRate;
  }
}
