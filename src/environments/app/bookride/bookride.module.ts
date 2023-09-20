import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookridePageRoutingModule } from './bookride-routing.module';

import { BookridePage } from './bookride.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookridePageRoutingModule
  ],
  declarations: [BookridePage]
})
export class BookridePageModule {}
