import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page'; // Import the ProfilePage component

describe('ProfilePage', () => {
  let component: ProfilePage;
  let fixture: ComponentFixture<ProfilePage>;

  beforeEach(waitForAsync(() => {
    // Configure and set up the testing environment
    TestBed.configureTestingModule({
      declarations: [ProfilePage], // Declare the ProfilePage component for testing
      imports: [IonicModule.forRoot()] // Import Ionic modules required for testing
    }).compileComponents(); // Compile the component for testing

    fixture = TestBed.createComponent(ProfilePage); // Create a fixture for the ProfilePage component
    component = fixture.componentInstance; // Initialize the component from the fixture
    fixture.detectChanges(); // Detect changes in the component
  }));

  it('should create', () => {
    // Expect that the component was created successfully
    expect(component).toBeTruthy();
  });
});
