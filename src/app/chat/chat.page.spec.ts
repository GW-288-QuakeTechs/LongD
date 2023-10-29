// Import necessary testing utilities and dependencies
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

// Import the ExploreContainerComponentModule
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

// Import the component to be tested
import { ChatPage } from './chat.page';

// Describe a test suite for the 'ChatPage' component
describe('ChatPage', () => {
  let component: ChatPage;
  let fixture: ComponentFixture<ChatPage>;

  // Set up an asynchronous testing environment
  beforeEach(async () => {
    // Configure and initialize the testing module
    await TestBed.configureTestingModule({
      declarations: [ChatPage], // Declare the component to be tested
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule] // Import necessary modules
    }).compileComponents();

    // Create a fixture for the component and get an instance of the component
    fixture = TestBed.createComponent(ChatPage);
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
