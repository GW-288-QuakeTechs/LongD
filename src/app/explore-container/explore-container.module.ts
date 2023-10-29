// Import necessary Angular modules and dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';

@NgModule({
  // Define the imported modules for this module
  imports: [CommonModule, FormsModule, IonicModule],

  // Declare the component(s) to be used within this module
  declarations: [ExploreContainerComponent],

  // Export the component(s) to make them available for other modules
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}
