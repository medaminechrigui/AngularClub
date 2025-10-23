import { TestBed } from '@angular/core/testing';

import { ClubService } from './club';

describe('Club', () => {
  let service: ClubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
