// Import necessary testing dependencies
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

// Import the component to be tested
import { LoginPage } from './login.page';

// Define a test suite for the LoginPage component
describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  // Execute the following code before running tests
  beforeEach(waitForAsync(() => {
    // Configure the testing module
    TestBed.configureTestingModule({
      // Specify the component to be tested
      declarations: [ LoginPage ],
      // Import required modules, including Ionic
      imports: [IonicModule.forRoot()]
    }).compileComponents(); // Compile component and its template

    // Create a fixture to test the component
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance; // Get an instance of the component
    fixture.detectChanges(); // Trigger change detection
  }));

  // Define a test case: "should create"
  it('should create', () => {
    // Expect the component to exist and be truthy
    expect(component).toBeTruthy();
  });
});
