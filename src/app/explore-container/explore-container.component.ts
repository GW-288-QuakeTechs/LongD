// Import necessary Angular modules and dependencies
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html', // Define the HTML template file for this component
  styleUrls: ['./explore-container.component.scss'], // Define the associated style or SCSS file
})
export class ExploreContainerComponent {

  // Define an input property to receive a 'name' from a parent component
  @Input() name?: string;

}
