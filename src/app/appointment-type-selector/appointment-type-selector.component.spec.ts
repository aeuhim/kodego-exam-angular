import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentTypeSelectorComponent } from './appointment-type-selector.component';

describe('AppointmentTypeSelectorComponent', () => {
  let component: AppointmentTypeSelectorComponent;
  let fixture: ComponentFixture<AppointmentTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentTypeSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
