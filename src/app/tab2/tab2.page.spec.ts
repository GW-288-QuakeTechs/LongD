// Import necessary testing modules and components
import { ComponentFixture, TestBed } from '@angular/core/testing'; // Import testing-related modules
import { IonicModule } from '@ionic/angular'; // Import Ionic module
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module'; // Import the ExploreContainerComponentModule
import { Tab2Page } from './tab2.page'; // Import the Tab2Page component

// Describe a test suite for 'Tab2Page'
describe('Tab2Page', () => {
  let component: Tab2Page; // Initialize a variable to hold the component instance
  let fixture: ComponentFixture<Tab2Page>; // Initialize a variable to hold the component's fixture
   // Set up asynchronous testing using 'beforeEach'
   beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tab2Page], // Declare the component being tested
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule] // Import necessary modules and components
    }).compileComponents(); // Compile the components

    // Create the component's fixture and component instance
    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger change detection
  });

  // Test whether the component should be created successfully
  it('should create', () => {
    expect(component).toBeTruthy(); // Check if the component is truthy (exists)
  });
});