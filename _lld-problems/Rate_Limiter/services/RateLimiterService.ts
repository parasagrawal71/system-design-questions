import { RateLimitType, UserTier } from "../enums/enums";
import { RateLimiterFactory } from "../factory/RateLimiterFactory";
import { RateLimitConfig } from "../models/RateLimitConfig";
import { User } from "../models/User";
import { IRateLimiter } from "./IRateLimiter";

export class RateLimiterService {
  private rateLimiters: Map<UserTier, IRateLimiter> = new Map();

  constructor() {
    this.rateLimiters.set(
      UserTier.FREE,
      RateLimiterFactory.createRateLimiter(RateLimitType.FIXED_WINDOW, new RateLimitConfig(3, 10)), // 3 requests in 10 seconds
    );
    this.rateLimiters.set(
      UserTier.PREMIUM,
      RateLimiterFactory.createRateLimiter(RateLimitType.FIXED_WINDOW, new RateLimitConfig(7, 10)), // 7 requests in 10 seconds
    );
  }

  async allowRequest(user: User) {
    const limiter = this.rateLimiters.get(user.getTier());
    if (!limiter) {
      throw new Error(`Rate limiter not configured for tier ${user.getTier()}`);
    }
    return await limiter.allowRequest(user.getId());
  }
}
