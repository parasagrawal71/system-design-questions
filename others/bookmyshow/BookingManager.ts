import * as rl from "readline-sync";

import Theatre from "./models/Theatre";
import BookingService from "./services/BookingService";
import MovieService from "./services/MovieService";
import TheatreService from "./services/TheatreService";
import ShowService from "./services/ShowService";
import Movie from "./models/Movie";
import Show from "./models/Show";
import Screen from "./models/Screen";
import Seat from "./models/Seat";
import PaymentService from "./services/PaymentService";
import Booking from "./models/Booking";
import SearchService from "./services/SearchService";
import SeatLockService from "./services/SeatLockService";
import BookingStatus from "./constants/BookingStatus";
import NotificationService from "./services/NotificationService";
import SeatAvailabilityService from "./services/SeatAvailabilityService";

class BookingManager {
  private _theatreService: TheatreService;
  private _showService: ShowService;
  private _movieService: MovieService;
  private _bookingService: BookingService;
  private _paymentService: PaymentService;
  private _searchService: SearchService;
  private _seatLockService: SeatLockService;
  private _notificationService: NotificationService;
  private _seatAvailabilityService: SeatAvailabilityService;

  constructor() {
    this._seatLockService = new SeatLockService();
    this._theatreService = new TheatreService();
    this._showService = new ShowService();
    this._movieService = new MovieService();
    this._searchService = new SearchService();
    this._notificationService = new NotificationService();
    this._paymentService = new PaymentService(this._seatLockService);
    this._bookingService = new BookingService(this._seatLockService);
    this._seatAvailabilityService = new SeatAvailabilityService(this._seatLockService);
  }

  setup(): void {
    const setupATheatre = (num: number, movie: Movie) => {
      const theatre = this._theatreService.createTheatre(`Theatre__${num}`);
      const screen1 = this._theatreService.createScreenInTheatre(`Screen__1`, theatre);
      theatre.addScreen(screen1);
      this._theatreService.createSeatInScreen("A", 1, screen1);
      this._theatreService.createSeatInScreen("A", 2, screen1);
      this._showService.createShow("Morning", screen1, movie, theatre);
      this._showService.createShow("Evening", screen1, movie, theatre);
    };

    const movie1 = this._movieService.createMovie(`Movie__1`);
    const movie2 = this._movieService.createMovie(`Movie__2`);
    setupATheatre(1, movie1);
    setupATheatre(2, movie1);
    setupATheatre(3, movie2);
  }

  showNSelectMovie() {
    const movies = this._movieService.getMovies();
    console.log(`Movies: `);
    movies.map((movie, index) => {
      console.log(`${index + 1}: ${movie.getName()}`);
    });
    const selectedNo = rl.question(`Select a movie (Enter serial number): `);
    const selected = movies[Number(selectedNo) - 1];
    console.log(`Selected movie: ${selected.getName()}`);
    console.log(`\n`);
    return selected;
  }

  showNSelectTheatre(selectedMovie: Movie): Show {
    const shows = this._showService.getShowsForMovie(selectedMovie);
    const groupedShows: Record<string, Array<Show>> = {};
    const theatres: Record<string, Theatre> = {};
    shows.map((show: Show) => {
      const theatreName = show.getTheatre().getName();
      theatres[theatreName] = show.getTheatre();
      if (!groupedShows[theatreName]) {
        groupedShows[theatreName] = [];
      }
      groupedShows[theatreName].push(show);
    });

    const visibleShows: any = [];
    for (const theatre of Object.values(theatres)) {
      visibleShows.push([theatre, groupedShows[theatre.getName()]]);
    }

    console.log(`Theatres: `);
    visibleShows.map((item: any, index: number) => {
      const [theatre, shows] = item;
      console.log(`${index + 1}: ${theatre.getName()}`);
      shows.map((show: Show, showIndex: number) => {
        console.log(`\t${showIndex + 1}: ${show.getShowTime()}`);
      });
    });

    const input = rl.question(`Select a show (Enter space-separated serial numbers): `);
    const [selectedTheatreNo, selectedShowNo] = input.split(" ");
    const selectedTheatre = visibleShows[Number(selectedTheatreNo) - 1][0];
    const selectedShow = visibleShows[Number(selectedTheatreNo) - 1][1][Number(selectedShowNo) - 1];
    console.log(`Selected show: ${selectedShow?.getShowTime()} (${selectedTheatre?.getName()})`);
    console.log(`\n`);
    return selectedShow;
  }

  showNSelectSeats(show: Show) {
    const screen = show.getScreen();
    const seats = screen.getSeats();

    const availableSeats = this._seatAvailabilityService.getAvailableSeats(
      show,
      this._bookingService.getBookedSeats(show),
    );
    const groupedAvailableSeats: any = {};
    availableSeats.map((seat: Seat) => {
      groupedAvailableSeats[seat.getId()] = seat;
    });

    console.log(`Seats: `);
    seats.map((seat, index) => {
      const isAvailable = groupedAvailableSeats[seat.getId()];
      console.log(`${index + 1}: ${seat.getRow()}${seat.getSeatNo()} ${isAvailable ? "" : "[ X ]"}`);
    });
    const input = rl.question(`Select a seat (Enter space-separated serial numbers): `);
    const selectedSeats = [];
    console.log(`Selected seats: `);
    for (const selectedNo of input.split(" ")) {
      const selected = seats[Number(selectedNo) - 1];
      selectedSeats.push(selected);
      console.log(`${selected.getRow()}${selected.getSeatNo()}`);
    }
    console.log(`\n`);
    return selectedSeats;
  }

  showBookingPreview(selectedMovie: Movie, selectedShow: Show, selectedSeats: Seat[]) {
    console.log(`Movie name: ${selectedMovie.getName()}`);
    console.log(`Theatre: ${selectedShow.getTheatre().getName()}`);
    console.log(`Screen: ${selectedShow.getScreen().getName()}`);
    console.log(`Show: ${selectedShow.getShowTime()}`);
    const seatNames = selectedSeats.map((seat: Seat) => `${seat.getRow()}${seat.getSeatNo()}`);
    console.log(`Seats: ${seatNames.join(", ")}`);
    console.log(`Price: Rs ${seatNames.length * 300}`);
    console.log(`\n`);
  }

  createBooking(selectedMovie: Movie, selectedShow: Show, selectedSeats: Seat[]) {
    const booking = this._bookingService.createBooking("paras", selectedShow, selectedSeats);
    return booking;
  }

  makePayment(booking: Booking) {
    const isSuccess = this._paymentService.makePayment(booking, "paras");
    if (!isSuccess) {
      this._paymentService.processPaymentFailure(booking, "paras");
      console.log(`Payment failed`);
      return;
    }

    this._bookingService.confirmBooking(booking, "paras");
    this._notificationService.sendEmail("paras", BookingStatus.CONFIRMED);
    this._notificationService.sendSMS("9876543210", BookingStatus.CONFIRMED);
    console.log(`Payment successful`);
  }

  searchMovies(movieName: string): Movie[] {
    return this._searchService.searchMovies(this._movieService.getMovies(), movieName);
  }
}

export default BookingManager;
