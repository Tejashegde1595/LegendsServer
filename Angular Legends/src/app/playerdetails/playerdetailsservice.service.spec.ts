import { TestBed } from '@angular/core/testing';

import { PlayerdetailsserviceService } from './playerdetailsservice.service';

describe('PlayerdetailsserviceService', () => {
  let service: PlayerdetailsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerdetailsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
