import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Apartment } from '../../models/apartment';
import { ApartmentService } from '../../services/apartment.service';
import { ApartmentActions } from '../../store/apartment/apartment.actions';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {
  private currentApartments$: Observable<Apartment[]>;

  constructor(
    apartmentService: ApartmentService,
    public actions: ApartmentActions
  ) {
    this.currentApartments$ = apartmentService.getApartments();
  }

  ngOnInit() {
    console.log(this.currentApartments$);
  }

  addApartment() {
    this.actions.add({
      id: 'hey',
      cost: 2000,
      position: {
        x: 1,
        y: 1
      },
      name: 'High heights'
    });
    console.log('added action');
  }

}
