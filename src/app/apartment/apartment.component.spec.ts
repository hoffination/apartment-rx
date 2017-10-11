import * as td from 'testdouble';
import { ApartmentComponent } from './apartment.component';
import { Observable } from 'rxjs/Observable';
import { Apartment } from '../models/apartment';

describe('ApartmentComponent', () => {
  let apartmentService, actions;
  
  beforeEach(() => {
    apartmentService = td.object(['getApartments'])
  })

  it('should get the apartments on construction', () => {
    const instance = new ApartmentComponent(apartmentService, actions);
    td.verify(apartmentService.getApartments());
  });
});
