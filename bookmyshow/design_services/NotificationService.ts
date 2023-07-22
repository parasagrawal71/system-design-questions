class NotificationService {
  constructor() {}

  sendEmail(user: string, type: BookingStatus): void {}

  sendSMS(phone: string, type: BookingStatus): void {}
}

export default NotificationService;
