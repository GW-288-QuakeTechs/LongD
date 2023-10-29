import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoundTPage } from './round-t.page';

describe('RoundTPage', () => {
  let component: RoundTPage;
  let fixture: ComponentFixture<RoundTPage>;

  beforeEach(waitForAsync(() => {
    // Configure and initialize the testing module
    TestBed.configureTestingModule({
      declarations: [RoundTPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    // Create a fixture and component instance for testing
    fixture = TestBed.createComponent(RoundTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    // Ensure that the component is created successfully
    expect(component).toBeTruthy();
  });
});
