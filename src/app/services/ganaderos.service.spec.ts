import { TestBed, inject } from '@angular/core/testing';

import { GanaderosService } from './ganaderos.service';

describe('GanaderosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GanaderosService]
    });
  });

  it('should be created', inject([GanaderosService], (service: GanaderosService) => {
    expect(service).toBeTruthy();
  }));
});
