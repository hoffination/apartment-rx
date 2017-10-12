import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Apartment } from '../../models/apartment';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {
  @Input()
  apartments: Apartment[];
  @Output()
  addApartment: EventEmitter<Apartment> = new EventEmitter<Apartment>();
  @Output()
  removeApartment: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {}

  add() {
    this.addApartment.emit();
  }

  auto() {
    setInterval(() => {
      for (let i = 0; i < 4; i++) {
        this.addApartment.emit();
      }
    }, 2000);
  }

  remove(id: number) {
    this.removeApartment.emit(id);
  }

}
