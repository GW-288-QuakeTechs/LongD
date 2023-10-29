// Import necessary Angular and Ionic modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// Import the routing module associated with the 'BookridePage' component
import { BookridePageRoutingModule } from './bookride-routing.module';

// Import the 'BookridePage' component
import { BookridePage } from './bookride.page';

@NgModule({
  imports: [
    // Import the CommonModule, FormsModule, IonicModule, and the 'BookridePageRoutingModule' modules
    CommonModule,
    FormsModule,
    IonicModule,
    BookridePageRoutingModule
  ],
  declarations: [BookridePage]
})
// Define the 'BookridePageModule' which is an Angular module
export class BookridePageModule {}
