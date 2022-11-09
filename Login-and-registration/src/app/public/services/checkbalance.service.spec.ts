import { TestBed } from '@angular/core/testing';

import { CheckbalanceService } from './checkbalance.service';

describe('CheckbalanceService', () => {
  let service: CheckbalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckbalanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
