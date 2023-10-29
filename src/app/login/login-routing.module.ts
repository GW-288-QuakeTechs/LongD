// Import necessary Angular modules and dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page'; // Import the component associated with this route

// Define the routes for the 'LoginPage' component
const routes: Routes = [
  {
    path: '', // Define the route path (root path)
    component: LoginPage, // Specify the associated component to load
  }
];

@NgModule({
  // Configure the route handling for this module
  imports: [RouterModule.forChild(routes)], // Import and configure the defined routes
  exports: [RouterModule], // Export the configured router module for use in other parts of the application
})
export class LoginPageRoutingModule {}
