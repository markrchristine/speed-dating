import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteInvestorRegistrationComponent } from './complete-investor-registration.component';

describe('CompleteInvestorRegistrationComponent', () => {
  let component: CompleteInvestorRegistrationComponent;
  let fixture: ComponentFixture<CompleteInvestorRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteInvestorRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteInvestorRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
