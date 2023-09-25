import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-dub',
  templateUrl: './one-dub.page.html',
  styleUrls: ['./one-dub.page.scss'],
})
export class OneDubPage implements OnInit {
trips = [
  {cartype: 'GAS', cartypeicon: 'assets/caricon2.png', seats:'assets/person.png', location: 'Chicago, IL - Madison, WI', date: '6/30/23', time:'2pm', blindicon:'assets/icon3.png', tvicon: 'assets/tv-icon.png', iicon: 'assets/l-icon.png' ,acicon: 'assets/ac-icon.png', caricon: 'assets/caricon.png', pics: 'assets/car1.jpg', nooftrips:3000, rating: '4/5', driver: 'John Joe', destination: 'Indiana-IIA', departureTime: '2:00pm', icon: 'car', departurePlace: 'Chicago Midway' },
  {cartype: 'ELECTRIC', cartypeicon: 'assets/caricon2.png', seats:'assets/person.png', location: 'Chicago, IL - Madison, WI', date: '6/30/23', time:'2pm', blindicon:'assets/icon3.png', tvicon: 'assets/tv-icon.png', iicon: 'assets/l-icon.png' ,acicon: 'assets/ac-icon.png', caricon: 'assets/caricon.png', pics: 'assets/car2.jpg', nooftrips:3000, rating: 4/5, driver: 'Joe Jr', destination: 'Wisconsin-CWA', departureTime: '3:30pm', icon: 'car', departurePlace: 'Chicago Midway' },
  {cartype: 'HYBRID', cartypeicon: 'assets/hybridcar.png', seats:'assets/person.png', location: 'Chicago, IL - Madison, WI', date: '6/30/23', time:'2pm', blindicon:'assets/icon3.png', tvicon: 'assets/tv-icon.png', iicon: 'assets/l-icon.png' ,acicon: 'assets/ac-icon.png', caricon: 'assets/caricon.png', pics: 'assets/car3.jpg', nooftrips:3000, rating: 4/5, driver: ' Bentley Mike', destination: 'Ohio-CMH', departureTime: '6:00Pm', icon: 'car', departurePlace: 'Chicago Midway' },
  {cartype: 'ELECTRIC', cartypeicon: 'assets/caricon2.png', seats:'assets/person.png', location: 'Chicago, IL - Madison, WI', date: '6/30/23', time:'2pm', blindicon:'assets/icon3.png', tvicon: 'assets/tv-icon.png', iicon: 'assets/l-icon.png' ,acicon: 'assets/ac-icon.png', caricon: 'assets/caricon.png', pics: 'assets/car1.jpg', nooftrips:3000, rating: 4/5, driver: 'Smith Jr', destination: 'Michigan-GFI', departureTime: '9:00am', icon: 'car', departurePlace: 'Chicago Midway' },
  {cartype: 'HYBRID', cartypeicon: 'assets/caricon2.png', seats:'assets/person.png', location: 'Chicago, IL - Madison, WI', date: '6/30/23', time:'2pm', blindicon:'assets/icon3.png', tvicon: 'assets/tv-icon.png', iicon: 'assets/l-icon.png' ,acicon: 'assets/ac-icon.png', caricon: 'assets/caricon.png', pics: 'assets/car2.jpg', nooftrips:3000, rating: 4/5, driver: 'Mike James', destination: 'Indiana-IIA', departureTime: '12:00pm', icon: 'car', departurePlace: 'Chicago Midway' },
  {cartype: 'GAS', cartypeicon: 'assets/caricon2.png', seats:'assets/person.png', location: 'Chicago, IL - Madison, WI', date: '6/30/23', time:'2pm', blindicon:'assets/icon3.png', tvicon: 'assets/tv-icon.png', iicon: 'assets/l-icon.png' ,acicon: 'assets/ac-icon.png', caricon: 'assets/caricon.png', pics: 'assets/car1.jpg', nooftrips:3000, rating: 4/5, driver: 'Biff Donald', destination: 'Wisconsin-MIA', departureTime: '1:30pm', icon: 'car', departurePlace: 'Chicago Midway' },
  {cartype: 'ELECTRIC', cartypeicon: 'assets/caricon2.png', seats:'assets/person.png', location: 'Chicago, IL - Madison, WI', date: '6/30/23', time:'2pm', blindicon:'assets/icon3.png', tvicon: 'assets/tv-icon.png', iicon: 'assets/l-icon.png' ,acicon: 'assets/ac-icon.png', caricon: 'assets/caricon.png', pics: 'assets/car2.jpg', nooftrips:3000, rating: 4/5, driver: 'James Mike', destination: 'Wisconsin-ASIA', departureTime: '2:00pm', icon: 'car', departurePlace: 'Chicago Midway' },
  {cartype: 'ELECTRIC', cartypeicon: 'assets/caricon2.png', seats:'assets/person.png', location: 'Chicago, IL - Madison, WI', date: '6/30/23', time:'2pm', blindicon:'assets/icon3.png', tvicon: 'assets/tv-icon.png', iicon: 'assets/l-icon.png' ,acicon: 'assets/ac-icon.png', caricon: 'assets/caricon.png', pics: 'assets/car1.jpg', nooftrips:3000, rating: 4/5, driver: 'Ronnie Scottie', destination: 'Indiana - FWIA', departureTime: '3:00pm', icon: 'car', departurePlace: 'Chicago ORD' },
  {cartype: 'GAS', cartypeicon: 'assets/caricon2.png', seats:'assets/person.png', location: 'Chicago, IL - Madison, WI', date: '6/30/23', time:'2pm', blindicon:'assets/icon3.png', tvicon: 'assets/tv-icon.png', iicon: 'assets/l-icon.png' ,acicon: 'assets/ac-icon.png', caricon: 'assets/caricon.png', pics: 'assets/car3.jpg', nooftrips:3000, rating: 4/5, driver: 'Donald Ronnie', destination: 'Wisconsin - MIA', departureTime: '3:30pm', icon: 'car', departurePlace: 'Chicago ORD' },
  {cartype: 'HYBRID', cartypeicon: 'assets/caricon2.png', seats:'assets/person.png', location: 'Chicago, IL - Madison, WI', date: '6/30/23', time:'2pm', blindicon:'assets/icon3.png', tvicon: 'assets/tv-icon.png', iicon: 'assets/l-icon.png' ,acicon: 'assets/ac-icon.png', caricon: 'assets/caricon.png', pics: 'assets/car2.jpg', nooftrips:3000, rating: 4/5, driver: 'Scottie Biff', destination: 'Michigan-IIA', departureTime: '4:00pm', icon: 'car', departurePlace: 'Chicago ORD' },
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
