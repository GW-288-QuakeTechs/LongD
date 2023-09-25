import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleDetailsPageRoutingModule } from './vehicledetails-routing.module';

import { VehicleDetailsPage } from './vehicledetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleDetailsPageRoutingModule
  ],
  declarations: [VehicleDetailsPage]
})
export class VehicleDetailsPageModule {}