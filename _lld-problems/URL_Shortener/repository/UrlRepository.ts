import { UrlEntry } from "../models/UrlEntry";
import { Base62Encoder } from "../services/Base62Encoder";

export class UrlRepository {
  private idCounter: number;
  private shortToEntry: Map<string, UrlEntry>;
  private longToEntry: Map<string, UrlEntry>;

  constructor() {
    this.idCounter = 1;
    this.shortToEntry = new Map();
    this.longToEntry = new Map();
  }

  create(longUrl: string, ttlSeconds: number | null = null) {
    // idempotency
    if (this.longToEntry.has(longUrl)) {
      return this.longToEntry.get(longUrl);
    }

    const id = this.idCounter++;
    const shortCode = Base62Encoder.encode(id);

    const expiresAt = ttlSeconds ? new Date(Date.now() + ttlSeconds * 1000) : null;

    const entry = new UrlEntry(id, longUrl, shortCode, expiresAt);

    this.shortToEntry.set(shortCode, entry);
    this.longToEntry.set(longUrl, entry);

    return entry;
  }

  getByShortCode(shortCode: string) {
    return this.shortToEntry.get(shortCode);
  }

  getAll() {
    return Array.from(this.shortToEntry.values());
  }
}
