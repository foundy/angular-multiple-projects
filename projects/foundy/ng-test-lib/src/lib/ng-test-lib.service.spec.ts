import { TestBed } from '@angular/core/testing';

import { NgTestLibService } from './ng-test-lib.service';

describe('NgTestLibService', () => {
  let service: NgTestLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgTestLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
