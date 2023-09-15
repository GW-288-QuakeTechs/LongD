import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoundTPageRoutingModule } from './round-t-routing.module';

import { RoundTPage } from './round-t.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoundTPageRoutingModule
  ],
  declarations: [RoundTPage]
})
export class RoundTPageModule {}
