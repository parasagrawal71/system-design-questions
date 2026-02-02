import { Location } from "../../model/Location";
import { IPricingStrategy } from "./IPricingStrategy";

export class LocationBasedPricingStrategy implements IPricingStrategy {
  calculateFare(src: Location, dest: Location): number {
    /**
      Uber charges differently depending on where a trip starts or ends. Certain locations have higher cost multipliers because they:
      - Have high rider demand (e.g., airports, tech parks)
      - Have limited driver supply
      - Are premium zones
      - Are congested or difficult to navigate
      - Involve toll roads or region-specific regulations
      This means the same distance can cost more if started from a busy zone like an airport vs. a quiet residential area.
    */
    // Returning 10 for simplicity
    return 10;
  }
}
