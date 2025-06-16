import BookingStatus from "../constants/BookingStatus";

class NotificationService {
  constructor() {}

  sendEmail(user: string, type: BookingStatus): void {
    if (type === BookingStatus.CONFIRMED) {
      console.log(`Email sent to ${user}: Your booking is confirmed`);
    }
  }

  sendSMS(phone: string, type: BookingStatus): void {
    if (type === BookingStatus.CONFIRMED) {
      console.log(`SMS sent to ${phone}: Your booking is confirmed`);
    }
  }
}

export default NotificationService;
