import { TestBed, inject } from '@angular/core/testing';

import { RouteService } from './route.service';

describe('RouteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteService]
    });
  });

  it('should ...', inject([RouteService], (service: RouteService) => {
    expect(service).toBeTruthy();
  }));
});
