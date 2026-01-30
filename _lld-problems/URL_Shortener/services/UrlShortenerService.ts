import { UrlRepository } from "../repository/UrlRepository";

export class UrlShortenerService {
  constructor(private readonly repository: UrlRepository) {}

  shorten(longUrl: string, ttlSeconds: number | null = null) {
    if (!this.isValidUrl(longUrl)) {
      throw new Error("Invalid URL");
    }

    return this.repository.create(longUrl, ttlSeconds);
  }

  resolve(shortCode: string) {
    const entry = this.repository.getByShortCode(shortCode);
    if (!entry) {
      throw new Error("URL not found");
    }

    if (entry.isExpired()) {
      throw new Error("URL expired");
    }

    entry.incrementAccess();
    return entry.getLongUrl();
  }

  printAll() {
    console.table(this.repository.getAll());
  }

  isValidUrl(url: string) {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }
}
