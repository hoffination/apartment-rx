import { Component, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { Apartment } from '../../models/apartment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnChanges {
  @ViewChild('mapCanvas')
  canvasRef: ElementRef;
  @Input()
  apartments: Apartment[];

  ngOnChanges() {
    // TODO: add apartment changes as shown here: https://teropa.info/blog/2016/12/12/graphics-in-angular-2.html#drawing-on-the-canvas-from-lifecycle-hooks
  }  
}
