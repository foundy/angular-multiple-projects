import { TestBed } from '@angular/core/testing';

import { ShareLibService } from './share-lib.service';

describe('ShareLibService', () => {
  let service: ShareLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
