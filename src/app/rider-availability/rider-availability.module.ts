import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiderAvailabilityPageRoutingModule } from './rider-availability-routing.module';

import { RiderAvailabilityPage } from './rider-availability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiderAvailabilityPageRoutingModule
  ],
  declarations: [RiderAvailabilityPage]
})
export class RiderAvailabilityPageModule {}
