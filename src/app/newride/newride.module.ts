import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewridePageRoutingModule } from './newride-routing.module';

import { NewridePage } from './newride.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewridePageRoutingModule
  ],
  declarations: [NewridePage]
})
export class NewridePageModule {}
