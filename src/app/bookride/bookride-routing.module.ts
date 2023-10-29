// Import necessary Angular and Ionic modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import the component that this routing module is associated with
import { BookridePage } from './bookride.page';

// Define the routes for this module
const routes: Routes = [
  {
    // Define the default path for this component
    path: '',
    // Specify the component that should be displayed when this route is accessed
    component: BookridePage
  }
];

@NgModule({
  // Import the defined routes into this module
  imports: [RouterModule.forChild(routes)],
  // Export the RouterModule to make it available to other parts of the application
  exports: [RouterModule],
})
// Define the routing module for the BookridePage component
export class BookridePageRoutingModule {}
