// Import necessary testing modules and the component to be tested.
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { OneDubPage } from './one-dub.page';

describe('OneDubPage', () => {
  let component: OneDubPage;  // Declare a variable to hold the component instance.
  let fixture: ComponentFixture<OneDubPage>;  // Declare a variable to hold the testing fixture.

  beforeEach(waitForAsync(() => {
    // Configure the testing module with the component and necessary dependencies.
    TestBed.configureTestingModule({
      declarations: [OneDubPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    // Create a testing fixture and an instance of the component.
    fixture = TestBed.createComponent(OneDubPage);
    component = fixture.componentInstance;

    // Trigger change detection to render the component.
    fixture.detectChanges();
  }));

  it('should create', () => {
    // Test case: Check if the component was created successfully.
    expect(component).toBeTruthy();
  });
});
