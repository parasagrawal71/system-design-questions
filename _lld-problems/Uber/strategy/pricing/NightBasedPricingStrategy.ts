import { Location } from "../../model/Location";
import { IPricingStrategy } from "./IPricingStrategy";

export class NightBasedPricingStrategy implements IPricingStrategy {
  calculateFare(src: Location, dest: Location): number {
    // Use user location to determine if it is night time (10pm to 6am)
    const isNight = true;
    if (isNight) return 50;
    return 0;
  }
}
