// Import necessary Angular modules and components
import { IonicModule } from '@ionic/angular'; // Import the IonicModule from Ionic framework
import { NgModule } from '@angular/core'; // Import the NgModule decorator
import { CommonModule } from '@angular/common'; // Import the CommonModule for common Angular directives
import { FormsModule } from '@angular/forms'; // Import the FormsModule for working with forms
import { Tab2Page } from './tab2.page'; // Import the Tab2Page component
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module'; // Import the ExploreContainerComponentModule
import { Tab2PageRoutingModule } from './tab2-routing.module'; // Import the route configuration for Tab2Page

// Define the Angular module for the Tab2Page
@NgModule({
  imports: [
    IonicModule, // Import and include the IonicModule for Ionic-specific features
    CommonModule, // Import and include the CommonModule for common directives
    FormsModule, // Import and include the FormsModule for form-related functionality
    ExploreContainerComponentModule, // Include the ExploreContainerComponentModule
    Tab2PageRoutingModule, // Include the route configuration for Tab2Page
  ],
  declarations: [Tab2Page] // Declare the Tab2Page component to make it available in this module
})
export class Tab2PageModule {} // Define the Angular module class for Tab2Page
