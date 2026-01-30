import { UserTier } from "./enums/enums";
import { User } from "./models/User";
import { RateLimiterService } from "./services/RateLimiterService";

(async function () {
  const rateLimiterService = new RateLimiterService();

  const freeUser = new User("User 1", UserTier.FREE);
  const premiumUser = new User("User 2", UserTier.PREMIUM);

  console.log(`=== Free User Requests ===`);
  for (let i = 1; i <= 12; i++) {
    const allowed = await rateLimiterService.allowRequest(freeUser);
    console.log(`Request ${i} for free user: ${allowed ? "Allowed" : "Blocked"}`);
    await sleep(1000);
  }

  console.log(`\n=== Premium User Requests ===`);
  for (let i = 1; i <= 15; i++) {
    const allowed = await rateLimiterService.allowRequest(premiumUser);
    console.log(`Request ${i} for premium user: ${allowed ? "Allowed" : "Blocked"}`);
    await sleep(1000);
  }
})();

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
