import { Ticket } from "../models/Ticket";
import { IPricingStrategy } from "./IPricingStrategy";

export class HourlyPricingStrategy implements IPricingStrategy {
  public calculatePrice(ticket: Ticket): number {
    const entryTime = ticket.entryTime;
    const exitTime = new Date();
    exitTime.setHours(exitTime.getHours() + 1); // FOR TESTING, adding 1 hour
    exitTime.setMinutes(exitTime.getMinutes() + 14); // FOR TESTING, adding 14 mins
    let hours = (exitTime.getTime() - entryTime.getTime()) / 1000 / 60 / 60;
    hours = Math.ceil(hours);
    return Number((hours * ticket.parkingSpot.price).toFixed(2));
  }
}
