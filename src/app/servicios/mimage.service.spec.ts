import { TestBed } from '@angular/core/testing';

import { MImageService } from './mimage.service';

describe('MImageService', () => {
  let service: MImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
