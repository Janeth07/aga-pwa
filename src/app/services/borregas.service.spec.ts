import { TestBed, inject } from '@angular/core/testing';

import { BorregasService } from './borregas.service';

describe('BorregasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BorregasService]
    });
  });

  it('should be created', inject([BorregasService], (service: BorregasService) => {
    expect(service).toBeTruthy();
  }));
});
