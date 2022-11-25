import { TestBed } from '@angular/core/testing';

import { CarteVisiteServiceService } from './carte-visite-service.service';

describe('CarteVisiteServiceService', () => {
  let service: CarteVisiteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarteVisiteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
