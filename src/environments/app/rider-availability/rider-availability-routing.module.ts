import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiderAvailabilityPage } from './rider-availability.page';

const routes: Routes = [
  {
    path: '',
    component: RiderAvailabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiderAvailabilityPageRoutingModule {}
