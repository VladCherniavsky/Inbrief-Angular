import { TestBed, inject } from '@angular/core/testing';

import { RequestCounterService } from './request-counter.service';

describe('RequestCounterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestCounterService]
    });
  });

  it('should be created', inject([RequestCounterService], (service: RequestCounterService) => {
    expect(service).toBeTruthy();
  }));
});
