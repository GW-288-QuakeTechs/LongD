// Import necessary modules and components from Angular
import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';

import { VehicleDetailsPage } from './vehicledetails.page';

// Define the routes for this module
const routes: Routes = [
  {
    path: '',  // Define the URL path for this route (root path)
    component: VehicleDetailsPage // Specify the component to be displayed when this route is accessed
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Import the RouterModule and configure it with the defined routes
  exports: [RouterModule], 
}) 
export class VehicleDetailsPageRoutingModule {} // Define the route module class
