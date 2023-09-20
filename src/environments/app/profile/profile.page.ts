import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

 
  currentUser = {
    profilePicUrl: 'assets/pic2.png', 
    name: 'John Doe',
    location: 'Chicago, IL',
    phoneNumber: '+1 123-456-7890',
    dob: '01/01/1990',
    joinedDate: '01/01/2023'
  };

  constructor() { }

  ngOnInit() {
  }

}
