export abstract class IRateLimiter {
  abstract allowRequest(userId: string): Promise<boolean>;
}
