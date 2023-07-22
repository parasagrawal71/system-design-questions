import * as rl from "readline-sync";

// CUSTOM IMPORTs
import ACTIONS from "./constants/Actions";
import BookingManager from "./BookingManager";

class Driver {
  bookingManager: BookingManager;

  constructor() {
    this.bookingManager = new BookingManager();
  }

  main(): void {
    this.bookingManager.setup();

    console.log(`Actions: `);
    Object.values(ACTIONS).map((action: string, index: number) => {
      console.log(`${index + 1}: ${action}`);
    });
    const action = rl.question(`Select an action (Enter serial number): `);
    const actionNo: number = Number(action);
    console.log(`\n`);

    switch (actionNo) {
      case 1:
        let temp = 0;
        while (true) {
          const selectedMovie = this.bookingManager.showNSelectMovie();
          const selectedShow = this.bookingManager.showNSelectTheatre(selectedMovie);
          const selectedSeats = this.bookingManager.showNSelectSeats(selectedShow);
          this.bookingManager.showBookingPreview(selectedMovie, selectedShow, selectedSeats);
          const booking = this.bookingManager.createBooking(selectedMovie, selectedShow, selectedSeats);

          const input = rl.question(`Proceed to payment (y/n): `);
          if (input === "n") {
            process.exit(0);
          }
          this.bookingManager.makePayment(booking);

          temp++;
          if (temp === 2) {
            break;
          }
        }

        break;

      case 2:
        console.log("Searching...");
        const movieName = rl.question(`Enter movie name: `);
        const matchedMovies = this.bookingManager.searchMovies(movieName);
        console.log(`Matched movies: `, matchedMovies.map((m) => m.getName()).join(", "));
        break;

      default:
        console.log(`Invalid action`);
    }
  }
}

const driver = new Driver();
driver.main();
