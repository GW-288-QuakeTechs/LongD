import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-dub',
  templateUrl: './one-dub.page.html',
  styleUrls: ['./one-dub.page.scss'],
})
export class OneDubPage implements OnInit {
trips = [
  { driver: 'John, Lacey, Bob, Jane', destination: 'Indiana-IIA', departureTime: '2:00pm', icon: 'car', departurePlace: 'Chicago Midway' },
  { driver: 'Jane,Joe, Joe Jr., Paco', destination: 'Wisconsin-CWA', departureTime: '3:30pm', icon: 'car', departurePlace: 'Chicago Midway' },
  { driver: 'Bob, Bentley, Asof, Peter', destination: 'Ohio-CMH', departureTime: '6:00Pm', icon: 'car', departurePlace: 'Chicago Midway' },
  { driver: 'Alice, Sara, Jane, Smith', destination: 'Michigan-GFI', departureTime: '9:00am', icon: 'car', departurePlace: 'Chicago Midway' },
  { driver: 'Mike, Ronald, Bobby', destination: 'Indiana-IIA', departureTime: '12:00pm', icon: 'car', departurePlace: 'Chicago Midway' },
  { driver: 'Sarah, Ricky, Biff', destination: 'Wisconsin-MIA', departureTime: '1:30pm', icon: 'car', departurePlace: 'Chicago Midway' },
  { driver: 'Daria, Dorris, Daniel, James', destination: 'Wisconsin-ASIA', departureTime: '2:00pm', icon: 'car', departurePlace: 'Chicago Midway' },
  { driver: 'Danny, Ronnie, Dorris', destination: 'Indiana - FWIA', departureTime: '3:00pm', icon: 'car', departurePlace: 'Chicago ORD' },
  { driver: 'Bobby, Jane, Donald, Mike', destination: 'Wisconsin - MIA', departureTime: '3:30pm', icon: 'car', departurePlace: 'Chicago ORD' },
  { driver: 'Scottie, Mike, Barry', destination: 'Michigan-IIA', departureTime: '4:00pm', icon: 'car', departurePlace: 'Chicago ORD' },
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
