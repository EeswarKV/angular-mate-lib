import { TestBed } from '@angular/core/testing';

import { AngularMateLibService } from './angular-mate-lib.service';

describe('AngularMateLibService', () => {
  let service: AngularMateLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularMateLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
