export class RateLimitConfig {
  private maxRequests: number;

  private windowSizeInSecs: number;

  constructor(maxRequests: number, windowSizeInSecs: number) {
    this.maxRequests = maxRequests;
    this.windowSizeInSecs = windowSizeInSecs;
  }

  getMaxRequests(): number {
    return this.maxRequests;
  }

  getWindowSizeInSecs(): number {
    return this.windowSizeInSecs;
  }

  isExpired(windowStartInMs: number): boolean {
    return Date.now() - windowStartInMs >= this.windowSizeInSecs * 1000;
  }
}
