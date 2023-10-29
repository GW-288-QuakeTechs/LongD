// Import necessary Angular dependencies
import { Component, OnInit } from '@angular/core';

// Define the component metadata
@Component({
  selector: 'app-newride', // CSS selector for embedding the component
  templateUrl: './newride.page.html', // HTML template associated with the component
  styleUrls: ['./newride.page.scss'], // External style files for component styling
})

// Define the NewridePage class
export class NewridePage implements OnInit {
  count: number = 0; // Initialize a count variable to keep track of seats
  showDate: boolean = false; // Initialize a boolean to control the visibility of date picker
  showTime: boolean = false; // Initialize a boolean to control the visibility of time picker

  constructor() { }

  ngOnInit() {
    // Lifecycle hook: Initialize component and perform any required setup
  }

  removeseat() {
    this.count -= 1; // Decrease the seat count
  }

  addseat() {
    this.count += 1; // Increase the seat count
  }

  openDate() {
    this.showDate = true; // Show the date picker
  }

  cancelDate() {
    this.showDate = false; // Hide the date picker
  }

  openTime() {
    this.showTime = true; // Show the time picker
  }

  cancelTime() {
    this.showTime = false; // Hide the time picker
  }
}
