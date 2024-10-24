import { STATUS } from "./constants/constants";

export const locations = [
  {
    address: "Address 1",
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    pincode: 100100,
  },
  {
    address: "Address 2",
    city: "Delhi",
    state: "Delhi",
    country: "India",
    pincode: 200200,
  },
];

export const CARS_LIST = [
  {
    vehicleId: 1,
    vehicleNo: 1111,
    company: "Maruti",
    model: "Swift",
    kmDriven: 1200,
    manufacturingDate: new Date("2023-01-01"),
    average: 20,
    cc: 800,
    dailyRentalCost: 500,
    hourlyRentalCost: 100,
    numOfSeats: 4,
    status: STATUS.ACTIVE,
  },
  {
    vehicleId: 2,
    vehicleNo: 2222,
    company: "Maruti",
    model: "Swift Dzire",
    kmDriven: 1250,
    manufacturingDate: new Date("2023-03-03"),
    average: 25,
    cc: 850,
    dailyRentalCost: 550,
    hourlyRentalCost: 120,
    numOfSeats: 4,
    status: STATUS.ACTIVE,
  },
  {
    vehicleId: 3,
    vehicleNo: 3333,
    company: "Maruti",
    model: "Baleno",
    kmDriven: 1210,
    manufacturingDate: new Date("2023-02-02"),
    average: 28,
    cc: 880,
    dailyRentalCost: 600,
    hourlyRentalCost: 180,
    numOfSeats: 4,
    status: STATUS.ACTIVE,
  },
  {
    vehicleId: 4,
    vehicleNo: 4444,
    company: "Maruti",
    model: "Brezza",
    kmDriven: 1230,
    manufacturingDate: new Date("2023-04-04"),
    average: 24,
    cc: 890,
    dailyRentalCost: 650,
    hourlyRentalCost: 150,
    numOfSeats: 4,
    status: STATUS.ACTIVE,
  },
];
