import { TestBed, inject } from '@angular/core/testing';

import { PullDataService } from './pull-data.service';

describe('PullDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PullDataService]
    });
  });

  it('should be created', inject([PullDataService], (service: PullDataService) => {
    expect(service).toBeTruthy();
  }));
});
