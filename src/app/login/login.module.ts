// Import necessary Angular modules and dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module'; // Import the associated routing module

import { LoginPage } from './login.page'; // Import the component to be configured

@NgModule({
  // Configure the module
  imports: [
    CommonModule, // Import the CommonModule
    FormsModule, // Import the FormsModule
    IonicModule, // Import the IonicModule
    LoginPageRoutingModule // Import the associated routing module
  ],
  declarations: [LoginPage] // Declare the component(s) to be part of this module
})
export class LoginPageModule {}
