// Import necessary Angular dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import the component associated with this route
import { NewridePage } from './newride.page';

// Define the routes for the NewridePage
const routes: Routes = [
  {
    path: '', // Define the URL path for this route (empty string for the default route)
    component: NewridePage, // Specify the component to be displayed for this route
  }
];

// Create a routing module for NewridePage
@NgModule({
  imports: [RouterModule.forChild(routes)], // Configure the routes for this module
  exports: [RouterModule], // Export the router module for use in other parts of the application
})
export class NewridePageRoutingModule {} // Export the routing module class
