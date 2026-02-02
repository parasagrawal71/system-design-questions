export class Location {
  private lat: number;
  private long: number;

  constructor(latitude: number, longitude: number) {
    this.lat = latitude;
    this.long = longitude;
  }

  distanceTo(other: Location): number {
    const dx = this.lat - other.lat;
    const dy = this.long - other.long;
    return Math.sqrt(dx * dx + dy * dy); // Euclidean distance for simplicity
  }
}
