// Import necessary Angular and Ionic modules and components
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatPage } from './chat.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

// Import the routing module associated with the ChatPage component
import { ChatPageRoutingModule } from './chat-routing.module';

@NgModule({
  imports: [
    // Import necessary modules for this module
    IonicModule, // Ionic module for UI components
    CommonModule, // Common Angular module
    FormsModule, // Form-related Angular module
    ExploreContainerComponentModule, // ExploreContainer component module
    ChatPageRoutingModule // Routing module for the ChatPage component
  ],
  declarations: [ChatPage] // Declare the ChatPage component
})
// Define the ChatPageModule, an Angular module
export class ChatPageModule {}
