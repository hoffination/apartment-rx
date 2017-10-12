import { Component, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { Apartment } from '../../models/apartment';

import '../../../assets/map-marker.png';

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

  private width = 500;

  ngOnChanges() {
    this.width = document.body.clientWidth;
    const ctx: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');
    ctx.clearRect(0, 0, this.width, 500);
    // TODO: add apartment changes as shown here:
    // https://teropa.info/blog/2016/12/12/graphics-in-angular-2.html#drawing-on-the-canvas-from-lifecycle-hooks
    this.apartments.forEach(a => {
      const image = new Image();
      image.onload = function() {
        ctx.drawImage(<HTMLImageElement>this, 0, 0, 64, 64, 50, 50, 16, 16);
      };
      image.src = '../../../assets/map-marker.png';
    });
  }
}
