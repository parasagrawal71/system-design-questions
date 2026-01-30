import { RateLimitType } from "../enums/enums";
import { RateLimitConfig } from "../models/RateLimitConfig";
import { FixedWindow } from "../services/FixedWindow";
import { SlidingWindowCounter } from "../services/SlidingWindowCounter";
import { SlidingWindowLog } from "../services/SlidingWindowLog";
import { TokenBucket } from "../services/TokenBucket";

export class RateLimiterFactory {
  static createRateLimiter(type: RateLimitType, rateLimitConfig: RateLimitConfig) {
    switch (type) {
      case RateLimitType.FIXED_WINDOW:
        return new FixedWindow(rateLimitConfig);

      case RateLimitType.SLIDING_WINDOW_COUNTER:
        return new SlidingWindowCounter(rateLimitConfig);

      case RateLimitType.TOKEN_BUCKET:
        return new TokenBucket(rateLimitConfig);

      case RateLimitType.SLIDING_WINDOW_LOG:
        return new SlidingWindowLog(rateLimitConfig);

      default:
        throw new Error("Invalid rate limiter type");
    }
  }
}
