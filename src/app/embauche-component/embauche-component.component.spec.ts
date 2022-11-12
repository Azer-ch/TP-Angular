import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbaucheComponentComponent } from './embauche-component.component';

describe('EmbaucheComponentComponent', () => {
  let component: EmbaucheComponentComponent;
  let fixture: ComponentFixture<EmbaucheComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbaucheComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmbaucheComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
