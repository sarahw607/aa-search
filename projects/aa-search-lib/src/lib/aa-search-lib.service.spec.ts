import { TestBed } from '@angular/core/testing';

import { AaSearchLibService } from './aa-search-lib.service';

describe('AaSearchLibService', () => {
  let service: AaSearchLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AaSearchLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
