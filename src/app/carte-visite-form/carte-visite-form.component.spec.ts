import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteVisiteFormComponent } from './carte-visite-form.component';

describe('CarteVisiteFormComponent', () => {
  let component: CarteVisiteFormComponent;
  let fixture: ComponentFixture<CarteVisiteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteVisiteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteVisiteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
