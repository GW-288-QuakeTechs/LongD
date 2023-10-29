import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html', // The HTML template for this component
  styleUrls: ['./profile.page.scss'], // The component-specific styles
})
export class ProfilePage implements OnInit {

  // Define a currentUser object with user profile information
  currentUser = {
    profilePicUrl: 'assets/pic2.png', // User's profile picture URL
    name: 'John Doe', // User's name
    location: 'Chicago, IL', // User's location
    phoneNumber: '+1 123-456-7890', // User's phone number
    dob: '01/01/1990', // User's date of birth
    joinedDate: '01/01/2023' // User's registration/joined date
  };

  constructor() { }

  ngOnInit() {
    // Code to run when the component is initialized
  }

}
