// Import necessary Angular modules and components
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VehicleDetailsPageRoutingModule } from './vehicledetails-routing.module';

import { VehicleDetailsPage } from './vehicledetails.page';

// Define the Angular module for the VehicleDetailsPage
@NgModule({
  imports: [
    CommonModule, // Import and include the CommonModule for common directives
    FormsModule, // Import and include the FormsModule for form-related functionality
    IonicModule,  // Import and include the IonicModule for Ionic-specific features
    VehicleDetailsPageRoutingModule // Include the route configuration for the VehicleDetailsPage
  ],
  declarations: [VehicleDetailsPage]
})
export class VehicleDetailsPageModule {}  // Define the Angular module class for the VehicleDetailsPage
