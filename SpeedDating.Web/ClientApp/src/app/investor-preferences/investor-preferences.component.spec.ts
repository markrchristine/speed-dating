import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorPreferencesComponent } from './investor-preferences.component';

describe('InvestorPreferencesComponent', () => {
  let component: InvestorPreferencesComponent;
  let fixture: ComponentFixture<InvestorPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorPreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
