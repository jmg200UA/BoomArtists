import { TestBed } from '@angular/core/testing';

import { BoomartistsService } from './boomartists.service';

describe('BoomartistsService', () => {
  let service: BoomartistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoomartistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
