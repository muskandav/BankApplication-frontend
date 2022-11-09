import { TestBed } from '@angular/core/testing';

import { GetpinService } from './getpin.service';

describe('GetpinService', () => {
  let service: GetpinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetpinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
