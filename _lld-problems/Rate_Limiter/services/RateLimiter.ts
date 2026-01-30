export abstract class RateLimiter {
  abstract allowRequest(userId: string): Promise<boolean>;
}
