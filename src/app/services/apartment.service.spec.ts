import { TestBed, inject } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';

import { ApartmentService } from './apartment.service';

describe('ApartmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApartmentService, Store],
      imports: [StoreModule.forRoot([])]
    });
  });

  it('should be created', inject([ApartmentService], (service: ApartmentService) => {
    expect(service).toBeTruthy();
  }));
});
