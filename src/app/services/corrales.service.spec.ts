import { TestBed, inject } from '@angular/core/testing';

import { CorralesService } from './corrales.service';

describe('CorralesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CorralesService]
    });
  });

  it('should be created', inject([CorralesService], (service: CorralesService) => {
    expect(service).toBeTruthy();
  }));
});
