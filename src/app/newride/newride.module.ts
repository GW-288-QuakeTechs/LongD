// Import necessary Angular and Ionic modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// Import the routing module for the NewridePage
import { NewridePageRoutingModule } from './newride-routing.module';

// Import the NewridePage component
import { NewridePage } from './newride.page';

// Define a module for the NewridePage
@NgModule({
  imports: [
    CommonModule, // Import the common module for shared features
    FormsModule,  // Import the FormsModule for working with forms
    IonicModule,   // Import the Ionic module for mobile UI components
    NewridePageRoutingModule // Import the routing module to define the page's routes
  ],
  declarations: [NewridePage] // Declare the NewridePage component for this module
})
export class NewridePageModule {} // Export the module class
