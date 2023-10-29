// Import the necessary Angular module
import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.page.html', // Define the HTML template file for this component
  styleUrls: ['chat.page.scss'] // Define the associated style or SCSS file
})
export class ChatPage {
  // Define and initialize the selected room as 'support'
  selectedRoom = 'support';

  // Define user information for the current user
  currentUser = {
    name: 'Dianne J',
    location: 'Chicago',
    phoneNumber: '+1 123-456-7890',
    profilePicUrl: 'assets/d30-pic.png',
    dob: '01/01/1990',
    joinedDate: 'JOINED 06/01/2023'
  };

  // Define and initialize variables for quick replies
  newQuickReply: string = '';
  quickReplies: string[] = [
    'Can we Shorten Layover',
    'Can we Extend Layover',
    'I cant find you',
    'Running Late',
    ' ',
  ];

  // Handle the selection of a quick reply
  selectQuickReply(reply: string) {
    this.newMessage = reply;
  }

  // Define the support room with initial messages
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
  };

  // Define the driver room with initial messages
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
  };

  // Define a computed property to get the current room based on the selected room
  get currentRoom() {
    return this.selectedRoom === 'support' ? this.supportRoom : this.driverRoom;
  }

  // Initialize the newMessage variable
  newMessage = '';

  // Function to send a new message
  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.currentRoom.messages.push({
        text: this.newMessage.trim(),
        sender: this.currentUser.phoneNumber,
      });
      this.newMessage = '';
    }
  }

  constructor() {}
}
