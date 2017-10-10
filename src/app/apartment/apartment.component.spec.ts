import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EventEmitter, DebugElement } from '@angular/core';

import { Apartment } from '../models/apartment';
import { ApartmentComponent } from './apartment.component';

describe('ApartmentComponent', () => {
  let component: ApartmentComponent;
  let fixture: ComponentFixture<ApartmentComponent>;
  let button: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApartmentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentComponent);
    component = fixture.componentInstance;
    button = fixture.debugElement.query(By.css('.add'));

    component.apartments = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to add apartments', () => {
    let apartment: Apartment;
    spyOn(component, 'add').and.callThrough();
    component.addApartment.subscribe((a: Apartment) => apartment = a);

    button.triggerEventHandler('click', null);
    expect(component.add).toHaveBeenCalledTimes(1);
    expect(apartment).toBeTruthy();
  });

  it('should be able to remove apartments', () => {
    const apartment: Apartment = {
      id: 'test',
      cost: 2000,
      position: {
        x: 1,
        y: 1
      },
      name: 'High heights',
      duration: 1000
    };
    component.apartments.push(apartment);
    fixture.detectChanges();

    let id: string;
    spyOn(component, 'remove').and.callThrough();
    component.removeApartment.subscribe((aid: string) => id = aid);
    const removeButton = fixture.debugElement.query(By.css('.remove'));
    removeButton.triggerEventHandler('click', null);

    expect(component.remove).toHaveBeenCalledTimes(1);
    expect(id).toEqual(apartment.id);
  });
});
