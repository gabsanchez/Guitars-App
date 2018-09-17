import { TestBed } from '@angular/core/testing';

import { GuitarsStorageService } from './guitars-storage.service';

describe('GuitarsStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuitarsStorageService = TestBed.get(GuitarsStorageService);
    expect(service).toBeTruthy();
  });
});
