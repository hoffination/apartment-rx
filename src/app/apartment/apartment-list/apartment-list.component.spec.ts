import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ApartmentListComponent } from './apartment-list.component';
import { ApartmentComponent } from '../apartment.component';
import { Apartment } from '../../models/apartment';

describe('ApartmentListComponent', () => {
  let component: ApartmentListComponent;
  let fixture: ComponentFixture<ApartmentListComponent>;
  let button: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentListComponent);
    component = fixture.componentInstance;
    button = fixture.debugElement.query(By.css('.add'));

    component.apartments = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to add apartments', () => {
    spyOn(component, 'add').and.callThrough();
    button.triggerEventHandler('click', null);
    expect(component.add).toHaveBeenCalledTimes(1);
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
