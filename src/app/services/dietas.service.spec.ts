import { TestBed, inject } from '@angular/core/testing';

import { DietasService } from './dietas.service';

describe('DietasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DietasService]
    });
  });

  it('should be created', inject([DietasService], (service: DietasService) => {
    expect(service).toBeTruthy();
  }));
});
