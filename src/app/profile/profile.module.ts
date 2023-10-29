import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';

@NgModule({
  imports: [
    CommonModule, // Provides common directives like ngFor, ngIf
    FormsModule, // Provides support for two-way data binding [(ngModel)]
    IonicModule, // Provides Ionic framework components and services
    ProfilePageRoutingModule, // Imports the routing module for the ProfilePage
  ],
  declarations: [ProfilePage] // Declares the ProfilePage component
})
export class ProfilePageModule {} // Defines the ProfilePage module
