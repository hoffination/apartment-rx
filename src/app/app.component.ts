import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Apartment } from './models/apartment';
import { ApartmentActions } from './store/apartment/apartment.actions';
import { ApartmentService } from './services/apartment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Apartment Search';
}
