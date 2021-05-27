import { TestBed } from '@angular/core/testing';

import { BecarioService } from './becario.service';

describe('BecarioService', () => {
  let service: BecarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BecarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
