import { PassengerVehicle } from "./PassengerVehicle";
import { SportyVehicle } from "./SportyVehicle";
import { Vehicle } from "./Vehicle";

function main() {
  const vehicle1: Vehicle = new SportyVehicle();
  vehicle1.drive();

  const vehicle2: Vehicle = new PassengerVehicle();
  vehicle2.drive();
}
main();
