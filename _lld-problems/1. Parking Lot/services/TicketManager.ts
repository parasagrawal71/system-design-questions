import { ParkingSpot } from "../models/ParkingSpot";
import { Ticket } from "../models/Ticket";
import { Vehicle } from "../models/Vehicle";

export class TicketManager {
  private _tickets: Ticket[] = [];

  public createTicket(entryTime: Date, parkingSpot: ParkingSpot, vehicle: Vehicle): Ticket {
    const ticket = new Ticket(entryTime, parkingSpot, vehicle);
    this._tickets.push(ticket);
    return ticket;
  }

  public getTicket(vehicle: Vehicle): Ticket | null {
    const ticket = this._tickets.find((t) => t.vehicle.vehicleNo === vehicle.vehicleNo);
    return ticket || null;
  }

  public getTickets(): Ticket[] {
    return this._tickets;
  }
}
