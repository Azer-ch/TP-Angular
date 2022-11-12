import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVisiteFormComponent } from './card-visite-form.component';

describe('CardVisiteFormComponent', () => {
  let component: CardVisiteFormComponent;
  let fixture: ComponentFixture<CardVisiteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVisiteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardVisiteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
