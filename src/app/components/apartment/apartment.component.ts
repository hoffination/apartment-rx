import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import uuidv4 from 'uuid/v4';

import { Apartment } from '../../models/apartment';
import { ApartmentService } from '../../services/apartment.service';
import { ApartmentActions } from '../../store/apartment/apartment.actions';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {
  @Input()
  apartments: Apartment[];
  @Output()
  addApartment: EventEmitter<Apartment> = new EventEmitter<Apartment>();
  @Output()
  removeApartment: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {}

  add() {
    this.addApartment.emit({
      id: uuidv4(),
      cost: 2000,
      position: {
        x: 1,
        y: 1
      },
      name: 'High heights'
    });
    console.log('added');
  }

  remove(id: number) {
    this.removeApartment.emit(id);
  }

}
