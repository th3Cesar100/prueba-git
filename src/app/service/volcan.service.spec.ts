import { TestBed } from '@angular/core/testing';

import { VolcanService } from './volcan.service';

describe('VolcanService', () => {
  let service: VolcanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolcanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
