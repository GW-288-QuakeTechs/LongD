import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '', // This defines the route path for the component (empty path means the default route).
    component: ProfilePage, // Specifies the component that should be displayed when this route is accessed.
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Configures the routes for the module.
  exports: [RouterModule], // Exports the configured RouterModule.
})
export class ProfilePageRoutingModule {} // Defines the routing module for the ProfilePage component.
