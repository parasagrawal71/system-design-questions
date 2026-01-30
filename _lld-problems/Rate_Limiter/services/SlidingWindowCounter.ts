import { Mutex } from "async-mutex";
import { RateLimitConfig } from "../models/RateLimitConfig";
import { IRateLimiter } from "./IRateLimiter";

export class SlidingWindowCounter extends IRateLimiter {
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

// TODO: Try this solution?
// async allowRequest(userId: string): Promise<boolean> {
//   if (!this.locks.has(userId)) {
//     this.locks.set(userId, new Mutex());
//   }

//   const lock = this.locks.get(userId);
//   await lock.acquire();

//   try {
//     const now = Date.now();
//     const windowSize = this.rateLimitConfig.getWindowSizeMs();
//     const maxRequests = this.rateLimitConfig.getMaxRequests();

//     // Initialize state if first request
//     if (!this.windowStart.has(userId)) {
//       this.windowStart.set(userId, now);
//       this.requestCount.set(userId, 1); // current window count
//       this.previousCount.set(userId, 0);
//       return true;
//     }

//     const currentWindowStart = this.windowStart.get(userId)!;
//     const elapsed = now - currentWindowStart;

//     // Case 1: Still in current window
//     if (elapsed < windowSize) {
//       const currentCount = this.requestCount.get(userId)!;
//       const previousCount = this.previousCount.get(userId)!;

//       const overlapRatio = (windowSize - elapsed) / windowSize;
//       const effectiveCount =
//         currentCount + previousCount * overlapRatio;

//       if (effectiveCount >= maxRequests) {
//         return false;
//       }

//       this.requestCount.set(userId, currentCount + 1);
//       return true;
//     }

//     // Case 2: Moved to next window (only one window ahead)
//     if (elapsed < 2 * windowSize) {
//       this.previousCount.set(
//         userId,
//         this.requestCount.get(userId)!
//       );
//       this.requestCount.set(userId, 1);
//       this.windowStart.set(userId, currentWindowStart + windowSize);
//       return true;
//     }

//     // Case 3: Far ahead → reset completely
//     this.windowStart.set(userId, now);
//     this.requestCount.set(userId, 1);
//     this.previousCount.set(userId, 0);
//     return true;
//   } finally {
//     lock.release();
//   }
// }
