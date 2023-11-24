import { TestBed } from '@angular/core/testing';

import { GooServiceService } from './goo-service.service';

describe('GooServiceService', () => {
  let service: GooServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GooServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
