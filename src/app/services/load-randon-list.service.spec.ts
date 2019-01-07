import { TestBed } from '@angular/core/testing';

import { LoadRandonListService } from './load-randon-list.service';

describe('LoadRandonListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadRandonListService = TestBed.get(LoadRandonListService);
    expect(service).toBeTruthy();
  });
});
