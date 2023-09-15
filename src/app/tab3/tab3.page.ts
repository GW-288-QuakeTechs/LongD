import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  selectedRoom = 'support'; // default room selected

  currentUser = {
    name: 'John Doe',
    phoneNumber: '+1 123-456-7890',
    profilePicUrl: 'assets/profile-pic.png',
  }; // current user information

  supportRoom = {
    name: 'Support',
    messages: [
      {
        text: 'Hi, how can I help you?',
        sender: '+1 555-555-5555',
      },
      {
        text: 'I need help with my account.',
        sender: this.currentUser.phoneNumber,
      },
      {
        text: 'Sure, what seems to be the problem?',
        sender: '+1 555-555-5555',
      },
    ],
  }; // chat history for support room

  driverRoom = {
    name: 'Driver',
    messages: [
      {
        text: 'Are you on your way?',
        sender: this.currentUser.phoneNumber,
      },
      {
        text: 'Yes, I am almost there.',
        sender: '+1 555-555-5555',
      },
      {
        text: 'Okay, see you soon.',
        sender: this.currentUser.phoneNumber,
      },
    ],
  }; // chat history for driver room

  get currentRoom() {
    return this.selectedRoom === 'support' ? this.supportRoom : this.driverRoom;
  } // get the chat history for the currently selected room

  newMessage = ''; // message input field

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.currentRoom.messages.push({
        text: this.newMessage.trim(),
        sender: this.currentUser.phoneNumber,
      });
      this.newMessage = '';
    }
  } // add a new message to the current chat room

  constructor() {}
}
