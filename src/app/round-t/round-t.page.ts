import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-round-t',
  templateUrl: './round-t.page.html',
  styleUrls: ['./round-t.page.scss'],
})
export class RoundTPage implements OnInit {
  // Define an array of trip data
  trips = [
     // Each object represents a trip with various details
    {cartype: 'GAS', cartypeicon: 'assets/caricon2.png', seats:'assets/person.png', location: 'Chicago, IL - Madison, WI', date: '6/30/23', time:'2pm', blindicon:'assets/pet-friendly-icon.png', tvicon: 'assets/tv-icon.png', iicon: 'assets/l-icon.png' ,acicon: 'assets/ac-icon.png', caricon: 'assets/caricon.png', pics: 'assets/car1.jpg', nooftrips:3000, rating: '4/5', driver: 'John Jane', destination: 'Indiana-IIA', return: 'Chicago', departureTime: '2:00pm', icon: 'car', departurePlace: 'Chicago Midway', layover: '6-hour layover' },
    {cartype: 'ELECTRIC', cartypeicon: 'assets/caricon2.png', seats:'assets/person.png',  location: 'Chicago, IL - Madison, WI', date: '6/30/23', time:'2pm', blindicon:'assets/pet-friendly-icon.png', tvicon: 'assets/tv-icon.png', iicon: 'assets/l-icon.png' ,acicon: 'assets/ac-icon.png', caricon: 'assets/caricon.png', pics: 'assets/car1.jpg', nooftrips:3000, rating: '4/5', driver: 'Joe Paco', destination: 'Wisconsin-CWA', departureTime: '3:30pm', icon: 'car', departurePlace: 'Chicago Midway', layover: '5-hour layover' },
    {cartype: 'HYBRID', cartypeicon: 'assets/caricon2.png', seats:'assets/person.png',  location: 'Chicago, IL - Madison, WI', date: '6/30/23', time:'2pm', blindicon:'assets/pet-friendly-icon.png', tvicon: 'assets/tv-icon.png', iicon: 'assets/l-icon.png' ,acicon: 'assets/ac-icon.png', caricon: 'assets/caricon.png', pics: 'assets/car1.jpg', nooftrips:3000, rating: '4/5', driver: 'Bentley Asof', destination: 'Ohio-CMH', departureTime: '6:00pm', icon: 'car', departurePlace: 'Chicago Midway', layover: '6-hour layover' },
    {cartype: 'HYBRID', cartypeicon: 'assets/caricon2.png', seats:'assets/person.png',  location: 'Chicago, IL - Madison, WI', date: '6/30/23', time:'2pm', blindicon:'assets/pet-friendly-icon.png', tvicon: 'assets/tv-icon.png', iicon: 'assets/l-icon.png' ,acicon: 'assets/ac-icon.png', caricon: 'assets/caricon.png', pics: 'assets/car1.jpg', nooftrips:3000, rating: '4/5', driver: 'Alice Smith', destination: 'Michigan-GFI', departureTime: '9:00am', icon: 'car', departurePlace: 'Chicago Midway', layover: '6-hour layover' },
    {cartype: 'ELECTRIC', cartypeicon: 'assets/caricon2.png', seats:'assets/person.png',  location: 'Chicago, IL - Madison, WI', date: '6/30/23', time:'2pm', blindicon:'assets/pet-friendly-icon.png', tvicon: 'assets/tv-icon.png', iicon: 'assets/l-icon.png' ,acicon: 'assets/ac-icon.png', caricon: 'assets/caricon.png', pics: 'assets/car1.jpg', nooftrips:3000, rating: '4/5', driver: 'Mike Bobby', destination: 'Indiana-IIA', departureTime: '12:00pm', icon: 'car', departurePlace: 'Chicago Midway', layover: '6-hour layover' },
    {cartype: 'ELECTRIC', cartypeicon: 'assets/caricon2.png', seats:'assets/person.png',  location: 'Chicago, IL - Madison, WI', date: '6/30/23', time:'2pm', blindicon:'assets/pet-friendly-icon.png', tvicon: 'assets/tv-icon.png', iicon: 'assets/l-icon.png' ,acicon: 'assets/ac-icon.png', caricon: 'assets/caricon.png', pics: 'assets/car1.jpg', nooftrips:3000, rating: '4/5', driver: 'Ricky Biff', destination: 'Wisconsin-MIA', departureTime: '1:30pm', icon: 'car', departurePlace: 'Chicago Midway', layover: '6-hour layover' },
    {cartype: 'HYBRID', cartypeicon: 'assets/caricon2.png', seats:'assets/person.png',  location: 'Chicago, IL - Madison, WI', date: '6/30/23', time:'2pm', blindicon:'assets/pet-friendly-icon.png', tvicon: 'assets/tv-icon.png', iicon: 'assets/l-icon.png' ,acicon: 'assets/ac-icon.png', caricon: 'assets/caricon.png', pics: 'assets/car1.jpg', nooftrips:3000, rating: '4/5', driver: 'Daria James', destination: 'Wisconsin-ASIA', departureTime: '2:00pm', icon: 'car', departurePlace: 'Chicago Midway', layover: '4-hour layover' },
    {cartype: 'ELECTRIC', cartypeicon: 'assets/caricon2.png', seats:'assets/person.png',  location: 'Chicago, IL - Madison, WI', date: '6/30/23', time:'2pm', blindicon:'assets/pet-friendly-icon.png', tvicon: 'assets/tv-icon.png', iicon: 'assets/l-icon.png' ,acicon: 'assets/ac-icon.png', caricon: 'assets/caricon.png', pics: 'assets/car1.jpg', nooftrips:3000, rating: '4/5', driver: 'Danny Ronnie', destination: 'Indiana-FWIA', departureTime: '3:00pm', icon: 'car', departurePlace: 'Chicago ORD', layover: '6-hour layover' },
    {cartype: 'HYBRID', cartypeicon: 'assets/caricon2.png', seats:'assets/person.png',  location: 'Chicago, IL - Madison, WI', date: '6/30/23', time:'2pm', blindicon:'assets/pet-friendly-icon.png', tvicon: 'assets/tv-icon.png', iicon: 'assets/l-icon.png' ,acicon: 'assets/ac-icon.png', caricon: 'assets/caricon.png', pics: 'assets/car1.jpg', nooftrips:3000, rating: '4/5', driver: 'Donald Mike', destination: 'Wisconsin-MIA', departureTime: '3:30pm', icon: 'car', departurePlace: 'Chicago ORD', layover: '3-hour layover' },
    {cartype: 'ELECTRIC', cartypeicon: 'assets/caricon2.png', seats:'assets/person.png',  location: 'Chicago, IL - Madison, WI', date: '6/30/23', time:'2pm', blindicon:'assets/pet-friendly-icon.png', tvicon: 'assets/tv-icon.png', iicon: 'assets/l-icon.png' ,acicon: 'assets/ac-icon.png', caricon: 'assets/caricon.png', pics: 'assets/car1.jpg', nooftrips:3000, rating: '4/5', driver: 'Scottie Mike', destination: 'Michigan-IIA', departureTime: '4:00pm', icon: 'car', departurePlace: 'Chicago ORD', layover: '6-hour layover' },
  ];
  // Initialize the displayed trips with the first 15 items
  displayedTrips = this.trips.slice(0, 15);
  // A flag to control the "Show More" button visibility
  showMoreButton = true;

  ngOnInit() {}
  // Function to load and display more trip details
  showMoreDetails() {
    const currentIndex = this.displayedTrips.length;
    const nextIndex = currentIndex + 4;
      // Append the next batch of trips to the displayed list
    this.displayedTrips = [...this.displayedTrips, ...this.trips.slice(currentIndex, nextIndex)];
     // Hide the "Show More" button when all trips are displayed
    if (this.displayedTrips.length === this.trips.length) {
      this.showMoreButton = false;
    }
  }
}