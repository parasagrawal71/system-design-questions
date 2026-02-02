import { Location } from "../../model/Location";

export interface IPricingStrategy {
  calculateFare(src: Location, dest: Location): number;
}
