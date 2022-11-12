import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteVisiteCardComponent } from './carte-visite-card.component';

describe('CarteVisiteCardComponent', () => {
  let component: CarteVisiteCardComponent;
  let fixture: ComponentFixture<CarteVisiteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteVisiteCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteVisiteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
