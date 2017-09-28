import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../models/appState';
import { Apartment } from '../models/apartment';

@Injectable()
export class ApartmentService {

  constructor(private store: Store<AppState>) { }

  getApartments(): Observable<Apartment[]> {
    return this.store.select(appState => appState.apartments);
  }
}
