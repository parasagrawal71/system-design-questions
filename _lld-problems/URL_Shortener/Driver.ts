import { UrlRepository } from "./repository/UrlRepository";
import { UrlShortenerService } from "./services/UrlShortenerService";

(function () {
  const repo = new UrlRepository();
  const service = new UrlShortenerService(repo);

  const entry = service.shorten("https://bitgo.com/careers", 60);
  console.log("Short URL:", entry?.getShortCode());

  const resolved = service.resolve(entry?.getShortCode() || "");
  console.log("Resolved URL:", resolved);

  service.shorten("https://google.com", 60);
  service.shorten("https://phonepe.com");
  service.shorten("https://stripe.com", 60);
  service.printAll();
})();
