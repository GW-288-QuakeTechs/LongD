// Import necessary Angular modules and components
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

// Define the routes for this module
const routes: Routes = [
  {

    path: '', // The URL path for this route (root path)
    component: Tab2Page, // Specify the component to be displayed when this route is accessed
  }
];

// Define and export the module that contains the route configuration
@NgModule({
  imports: [RouterModule.forChild(routes)], // Import the RouterModule and configure it with the defined routes
  exports: [RouterModule], // Export the configured RouterModule for use in other parts of the application
})
export class Tab2PageRoutingModule {} // Define the route module class