import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input()
  apartments: Apartment[];
  @Output()
  addApartment: EventEmitter<Apartment> = new EventEmitter<Apartment>();
  @Output()
  removeApartment: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
    
  }

  add() {
    // this is generated in the reducer
    this.addApartment.emit({
      id: '',
      cost: 0,
      position: {
        x: 0,
        y: 0
      },
      name: '',
      duration: 0
    });
  }

  auto() {
    setInterval(() => {
      for(let i = 0; i < 4; i++) {
        this.addApartment.emit({
          id: '',
          cost: 0,
          position: {
            x: 0,
            y: 0
          },
          name: '',
          duration: 0
        });
      }
    }, 2000);
  }

  remove(id: number) {
    this.removeApartment.emit(id);
  }

}
