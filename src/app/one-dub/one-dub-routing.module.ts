import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneDubPage } from './one-dub.page';

const routes: Routes = [
  {
    path: '',
    component: OneDubPage // Define the OneDubPage component as the route's component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Configure the routes
  exports: [RouterModule], // Export the configured RouterModule for use in other parts of the application
})
export class OneDubPageRoutingModule {} // Define the routing module for the OneDubPage
