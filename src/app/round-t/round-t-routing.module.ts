import { NgModule } from '@angular/core';           // Import the NgModule decorator
import { Routes, RouterModule } from '@angular/router'; // Import the Routes and RouterModule for defining routes

import { RoundTPage } from './round-t.page';     // Import the RoundTPage component

const routes: Routes = [                        // Define an array of route objects
  {
    path: '',                                  // The URL path for this route (empty string indicates the default route)
    component: RoundTPage                     // The component to load when the route is activated (RoundTPage in this case)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],     // Import and configure the Angular Router module with the defined routes
  exports: [RouterModule],                    // Export the configured RouterModule
})
export class RoundTPageRoutingModule {}          // Define and export the RoundTPageRoutingModule class
