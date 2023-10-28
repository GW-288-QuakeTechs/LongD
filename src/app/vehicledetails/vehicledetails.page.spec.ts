import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VehicleDetailsPage } from './vehicledetails.page';

// Describe a test suite for 'VehicleDetailsPage'
describe('VehiclDetailsPage', () => {
  let component: VehicleDetailsPage;
  let fixture: ComponentFixture<VehicleDetailsPage>;

    // Set up asynchronous testing using waitForAsync
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

      // Create the component's fixture and component instance
    fixture = TestBed.createComponent(VehicleDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // Test whether the component should be created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
