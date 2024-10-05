import { PassengerVehicle } from "./PassengerVehicle";
import { SportyVehicle } from "./SportyVehicle";
import { Vehicle } from "./Vehicle";

function main() {
  //   const vehicle: Vehicle = new SportyVehicle();
  //   vehicle.drive();

  const vehicle: Vehicle = new PassengerVehicle();
  vehicle.drive();
}
main();
