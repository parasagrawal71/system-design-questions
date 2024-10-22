import { CARS_LIST, locations } from "./data";
import { Car } from "./models/Car";
import { Location } from "./models/Location";
import { Store } from "./models/Store";
import { User } from "./models/User";
import { Vehicle } from "./models/Vehicle";
import { VehicleRentalSystem } from "./services/VehicleRentalSystem";
import { addDays, format, toDate } from "date-fns";
import { ReservationStatus, ReservationType } from "./constants/constants";
import { Bill } from "./models/Bill";
import { Payment } from "./models/Payment";

(function main() {
  //
  const vehicleRentalSystem = new VehicleRentalSystem(initUsers(), initStores());
  console.log(vehicleRentalSystem);

  // 0. User comes
  const user = vehicleRentalSystem.users[0]; // User 1

  // 1. User search store based on location
  const location = locations[0] as unknown as Location; // Location - Bangalore
  const store = vehicleRentalSystem.getStore(location);
  console.log(`\nUser '${user.userName}' selects ${store?.location.city} location`);

  // 2. Get all vehicles you are interested in (based upon different filters)
  console.log("\nVehicles list: ");
  store?.getVehicles().forEach((vehicle) => {
    // getVehicles can accept vehicleType filter
    console.log(vehicle);
  });

  // 3. User books a car
  const vehicle = store?.getVehicles()[1];
  if (!vehicle) return;
  const bookingDate = new Date(new Date().toLocaleDateString());
  const startDate = addDays(bookingDate, 2);
  const endDate = addDays(bookingDate, 5);
  const startTime = "10:00";
  const endTime = "23:00";
  console.log(
    `\nUser '${user.userName}' books vehicle '${
      vehicle.vehicleNo
    }' from ${startDate.toLocaleDateString()} ${startTime} to ${endDate.toLocaleDateString()} ${endTime}`,
  );
  const reservation = store?.createReservation(
    vehicle,
    user,
    bookingDate,
    startDate,
    endDate,
    startTime,
    endTime,
    location,
    location,
    ReservationType.DAILY,
  );
  console.log(`Reservation: `, reservation);

  // 4. Generate the bill
  const bill = new Bill(reservation);
  console.log(`\nBill: `, bill.totalBillAmount, bill.isBillPaid);

  // 5. Make payment
  const payment = new Payment();
  payment.payBill(bill);
  console.log(`\nPayment: isBillPaid = `, bill.isBillPaid);

  // 6. Trip completed, submit the vehicle and close the reservation
  store?.completeReservation(reservation);
  console.log(`\nReservation completed: `, reservation.status);
})();

function initUsers(): User[] {
  const users: User[] = [];
  for (let i = 1; i <= 2; i++) {
    users.push(new User(String(i), `User ${String(i)}`, `LICNO${String(i)}000`));
  }
  return users;
}

function initStores(): Store[] {
  const stores: Store[] = [];
  for (let i = 1; i <= 2; i++) {
    const location = new Location(
      locations[i - 1].address,
      locations[i - 1].city,
      locations[i - 1].state,
      locations[i - 1].country,
      locations[i - 1].pincode,
    );
    const store = new Store(i, location);
    store.setVehicles(initVehicles(store));
    stores.push(store);
  }
  return stores;
}

function initVehicles(store: Store): Vehicle[] {
  const cars: Vehicle[] = [];
  if (store.location.city === locations[0].city) {
    for (let i = 0; i <= 1; i++) {
      const car: Vehicle = new Car();
      car.setVehicle(
        CARS_LIST[i].vehicleId,
        CARS_LIST[i].vehicleNo,
        CARS_LIST[i].company,
        CARS_LIST[i].model,
        CARS_LIST[i].kmDriven,
        CARS_LIST[i].manufacturingDate,
        CARS_LIST[i].average,
        CARS_LIST[i].cc,
        CARS_LIST[i].dailyRentalCost,
        CARS_LIST[i].hourlyRentalCost,
        CARS_LIST[i].numOfSeats,
        CARS_LIST[i].status,
      );
      cars.push(car);
    }
  }

  if (store.location.city === locations[1].city) {
    for (let i = 2; i <= 3; i++) {
      const car: Vehicle = new Car();
      car.setVehicle(
        CARS_LIST[i].vehicleId,
        CARS_LIST[i].vehicleNo,
        CARS_LIST[i].company,
        CARS_LIST[i].model,
        CARS_LIST[i].kmDriven,
        CARS_LIST[i].manufacturingDate,
        CARS_LIST[i].average,
        CARS_LIST[i].cc,
        CARS_LIST[i].dailyRentalCost,
        CARS_LIST[i].hourlyRentalCost,
        CARS_LIST[i].numOfSeats,
        CARS_LIST[i].status,
      );
      cars.push(car);
    }
  }
  return cars;
}
