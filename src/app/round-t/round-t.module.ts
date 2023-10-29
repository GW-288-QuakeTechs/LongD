// Import necessary modules and components from Angular and Ionic libraries
import { NgModule } from '@angular/core';          // Import the NgModule decorator
import { CommonModule } from '@angular/common';    // Import the CommonModule module
import { FormsModule } from '@angular/forms';      // Import the FormsModule module for working with forms
import { IonicModule } from '@ionic/angular';      // Import Ionic components and services

// Import the routing module for the RoundT page
import { RoundTPageRoutingModule } from './round-t-routing.module';

// Import the RoundTPage component
import { RoundTPage } from './round-t.page';

@NgModule({
  imports: [
    CommonModule,                              // Import the CommonModule to work with common directives
    FormsModule,                               // Import FormsModule for form-related functionality
    IonicModule,                               // Import the Ionic module to use Ionic components and services
    RoundTPageRoutingModule                   // Import the routing module for the RoundT page
  ],
  declarations: [RoundTPage]                   // Declare the RoundTPage component
})
export class RoundTPageModule {}                // Define and export the RoundTPageModule class
