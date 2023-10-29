// Import necessary Angular modules and components
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import the component that this routing module is associated with
import { ChatPage } from './chat.page';

// Define the routes for this module
const routes: Routes = [
  {
    path: '',
    component: ChatPage, // Associate the empty path with the ChatPage component
  }
];

@NgModule({
  // Import the defined routes into this module
  imports: [RouterModule.forChild(routes)],
  // Export the RouterModule to make it available to other parts of the application
  exports: [RouterModule]
})
// Define the routing module for the ChatPage component
export class ChatPageRoutingModule {}
