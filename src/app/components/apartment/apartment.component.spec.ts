import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { EventEmitter } from '@angular/core';

import { Apartment } from '../../models/apartment';
import { ApartmentComponent } from './apartment.component';

describe('ApartmentComponent', () => {
  let component: ApartmentComponent;
  let fixture: ComponentFixture<ApartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to add apartments', (done) => {
    component.addApartment.subscribe((a: Apartment) => {
      expect(a).toBeTruthy();
      done();
    });

    spyOn(component, 'add').and.callThrough();
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('button').click();
    fixture.detectChanges();
    expect(component.add).toHaveBeenCalledTimes(1);
    component.add();

    // This apparently does seem to work
    // component.addApartment.emit(null);
  });
});
