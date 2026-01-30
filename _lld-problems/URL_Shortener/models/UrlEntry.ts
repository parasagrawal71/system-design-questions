export class UrlEntry {
  private id: number;

  private longUrl: string;

  private shortCode: string;

  private createdAt: Date;

  private expiresAt: Date | null;

  private accessCount: number;

  constructor(id: number, longUrl: string, shortCode: string, expiresAt: Date | null = null) {
    this.id = id;
    this.longUrl = longUrl;
    this.shortCode = shortCode;
    this.createdAt = new Date();
    this.expiresAt = expiresAt;
    this.accessCount = 0;
  }

  isExpired() {
    return this.expiresAt && new Date() > this.expiresAt;
  }

  incrementAccess() {
    this.accessCount++;
  }

  // Getters
  getLongUrl() {
    return this.longUrl;
  }

  getShortCode() {
    return this.shortCode;
  }
}
