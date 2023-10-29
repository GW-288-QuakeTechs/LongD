// Import necessary testing utilities and dependencies
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

// Import the component to be tested
import { ExploreContainerComponent } from './explore-container.component';

// Describe a test suite for the 'ExploreContainerComponent' component
describe('ExploreContainerComponent', () => {
  let component: ExploreContainerComponent;
  let fixture: ComponentFixture<ExploreContainerComponent>;

  // Set up an asynchronous testing environment
  beforeEach(async () => {
    // Configure and initialize the testing module
    await TestBed.configureTestingModule({
      declarations: [ExploreContainerComponent], // Declare the component to be tested
      imports: [IonicModule.forRoot()] // Import necessary modules
    }).compileComponents();

    // Create a fixture for the component and get an instance of the component
    fixture = TestBed.createComponent(ExploreContainerComponent);
    component = fixture.componentInstance;

    // Trigger change detection to update the component
    fixture.detectChanges();
  });

  // Define a test case: 'should create'
  it('should create', () => {
    // Assert that the component was created successfully
    expect(component).toBeTruthy();
  });
});
