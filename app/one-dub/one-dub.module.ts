import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneDubPageRoutingModule } from './one-dub-routing.module';

import { OneDubPage } from './one-dub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OneDubPageRoutingModule
  ],
  declarations: [OneDubPage]
})
export class OneDubPageModule {}
