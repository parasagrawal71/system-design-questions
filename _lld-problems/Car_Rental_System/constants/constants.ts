export enum VEHICLE_TYPE {
  CAR = "CAR",
}

export enum STATUS {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE", // Due to booked, under maintenance, etc reasons
}

export enum ReservationType {
  HOURLY = "HOURLY",
  DAILY = "DAILY",
}

export enum ReservationStatus {
  SCHEDULED = "SCHEDULED",
  INPROGRESS = "INPROGRESS",
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
}

export enum PaymentMode {
  CASH = "CASH",
  ONLINE = "ONLINE",
}
