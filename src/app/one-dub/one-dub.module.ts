import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneDubPageRoutingModule } from './one-dub-routing.module';

import { OneDubPage } from './one-dub.page';

@NgModule({
  imports: [
    CommonModule, // Import CommonModule for common directives and pipes
    FormsModule, // Import FormsModule for form handling
    IonicModule, // Import IonicModule for Ionic components and features
    OneDubPageRoutingModule, // Import the routing module for the OneDubPage
  ],
  declarations: [OneDubPage] // Declare the OneDubPage component
})
export class OneDubPageModule {} // Define the module for the OneDubPage
