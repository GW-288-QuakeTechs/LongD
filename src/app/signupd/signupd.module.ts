import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupdPageRoutingModule } from './signupd-routing.module';

import { SignupdPage } from './signupd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupdPageRoutingModule
  ],
  declarations: [SignupdPage]
})
export class SignupdPageModule {}
