// Import necessary testing utilities and dependencies
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

// Import the component to be tested
import { BookridePage } from './bookride.page';

// Describe a test suite for the 'BookridePage' component
describe('BookridePage', () => {
  let component: BookridePage;
  let fixture: ComponentFixture<BookridePage>;

  // Set up asynchronous testing environment
  beforeEach(waitForAsync(() => {
    // Configure and initialize the testing module
    TestBed.configureTestingModule({
      declarations: [ BookridePage ], // Declare the component to be tested
      imports: [IonicModule.forRoot()] // Import Ionic modules required for testing
    }).compileComponents();

    // Create a fixture for the component and get an instance of the component
    fixture = TestBed.createComponent(BookridePage);
    component = fixture.componentInstance;

    // Trigger change detection to update the component
    fixture.detectChanges();
  }));

  // Define a test case: 'should create'
  it('should create', () => {
    // Assert that the component was created successfully
    expect(component).toBeTruthy();
  });
});
