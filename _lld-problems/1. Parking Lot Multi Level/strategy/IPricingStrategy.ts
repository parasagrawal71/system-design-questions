import { Ticket } from "../models/Ticket";

export interface IPricingStrategy {
  calculatePrice(ticket: Ticket): number;
}
