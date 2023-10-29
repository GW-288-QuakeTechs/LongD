// Import necessary Angular testing dependencies
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

// Import the NewridePage component to be tested
import { NewridePage } from './newride.page';

// Define a test suite for the NewridePage component
describe('NewridePage', () => {
  let component: NewridePage;
  let fixture: ComponentFixture<NewridePage>;

  // Use waitForAsync to handle asynchronous operations
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NewridePage], // Declare the component for testing
      imports: [IonicModule.forRoot()] // Import necessary Ionic modules
    }).compileComponents(); // Compile the component and its dependencies

    fixture = TestBed.createComponent(NewridePage); // Create a test fixture for the component
    component = fixture.componentInstance; // Get an instance of the component
    fixture.detectChanges(); // Trigger change detection in the component
  }));

  // Define a test case
  it('should create', () => {
    // Expect that the component has been successfully created
    expect(component).toBeTruthy();
  });
});
