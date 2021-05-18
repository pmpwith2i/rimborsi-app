import { TestBed } from '@angular/core/testing';

import { DelegheService } from './deleghe.service';

describe('DelegheService', () => {
  let service: DelegheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelegheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
