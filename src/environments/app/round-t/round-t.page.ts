import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-round-t',
  templateUrl: './round-t.page.html',
  styleUrls: ['./round-t.page.scss'],
})
export class RoundTPage implements OnInit {
  trips = [
    { driver: 'John, Lacey, Bob, Jane', destination: 'Indiana-IIA', return: 'Chicago', departureTime: '2:00pm', icon: 'car', departurePlace: 'Chicago Midway', layover: '6-hour layover' },
    { driver: 'Jane, Joe, Joe Jr., Paco', destination: 'Wisconsin-CWA', departureTime: '3:30pm', icon: 'car', departurePlace: 'Chicago Midway', layover: '5-hour layover' },
    { driver: 'Bob, Bentley, Asof, Peter', destination: 'Ohio-CMH', departureTime: '6:00pm', icon: 'car', departurePlace: 'Chicago Midway', layover: '6-hour layover' },
    { driver: 'Alice, Sara, Jane, Smith', destination: 'Michigan-GFI', departureTime: '9:00am', icon: 'car', departurePlace: 'Chicago Midway', layover: '6-hour layover' },
    { driver: 'Mike, Ronald, Bobby', destination: 'Indiana-IIA', departureTime: '12:00pm', icon: 'car', departurePlace: 'Chicago Midway', layover: '6-hour layover' },
    { driver: 'Sarah, Ricky, Biff', destination: 'Wisconsin-MIA', departureTime: '1:30pm', icon: 'car', departurePlace: 'Chicago Midway', layover: '6-hour layover' },
    { driver: 'Daria, Dorris, Daniel, James', destination: 'Wisconsin-ASIA', departureTime: '2:00pm', icon: 'car', departurePlace: 'Chicago Midway', layover: '4-hour layover' },
    { driver: 'Danny, Ronnie, Dorris', destination: 'Indiana-FWIA', departureTime: '3:00pm', icon: 'car', departurePlace: 'Chicago ORD', layover: '6-hour layover' },
    { driver: 'Bobby, Jane, Donald, Mike', destination: 'Wisconsin-MIA', departureTime: '3:30pm', icon: 'car', departurePlace: 'Chicago ORD', layover: '3-hour layover' },
    { driver: 'Scottie, Mike, Barry', destination: 'Michigan-IIA', departureTime: '4:00pm', icon: 'car', departurePlace: 'Chicago ORD', layover: '6-hour layover' },
  ];

  displayedTrips = this.trips.slice(0, 15);
  showMoreButton = true;

  ngOnInit() {}

  showMoreDetails() {
    const currentIndex = this.displayedTrips.length;
    const nextIndex = currentIndex + 4;
    this.displayedTrips = [...this.displayedTrips, ...this.trips.slice(currentIndex, nextIndex)];
    if (this.displayedTrips.length === this.trips.length) {
      this.showMoreButton = false;
    }
  }
}
