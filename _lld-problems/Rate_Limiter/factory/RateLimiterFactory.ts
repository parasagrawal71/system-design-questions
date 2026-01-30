import { RateLimitType } from "../enums/enums";
import { RateLimitConfig } from "../models/RateLimitConfig";
import { FixedWindow } from "../services/FixedWindow";

export class RateLimiterFactory {
  static createRateLimiter(type: RateLimitType, rateLimitConfig: RateLimitConfig) {
    switch (type) {
      case RateLimitType.FIXED_WINDOW:
        return new FixedWindow(rateLimitConfig);
      default:
        throw new Error("Invalid rate limiter type");
    }
  }
}
