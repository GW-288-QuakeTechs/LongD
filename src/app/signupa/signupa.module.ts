import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupaPageRoutingModule } from './signupa-routing.module';

import { SignupaPage } from './signupa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupaPageRoutingModule
  ],
  declarations: [SignupaPage]
})
export class SignupaPageModule {}
