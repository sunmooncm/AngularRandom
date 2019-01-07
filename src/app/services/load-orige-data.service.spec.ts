import { TestBed } from '@angular/core/testing';

import { LoadOrigeDataService } from './load-orige-data.service';

describe('LoadOrigeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadOrigeDataService = TestBed.get(LoadOrigeDataService);
    expect(service).toBeTruthy();
  });
});
