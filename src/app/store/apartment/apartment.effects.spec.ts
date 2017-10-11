import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { Actions } from '@ngrx/effects';

import { Add, AddFinal } from './apartment.actions';
import { ApartmentEffects } from './apartment.effects';
import { Apartment } from '../../models/apartment';
import { CustomAction } from '../custom.action';

describe('Apartment Effects', () => {
    let effects: ApartmentEffects;
    let actions: Observable<any>;

    beforeEach(() => {
        TestBed.configureTestingModule({
          providers: [
            ApartmentEffects,
            provideMockActions(() => actions),
            // other providers
          ],
        });
    
        effects = TestBed.get(ApartmentEffects);
    });

    it('should exist', () => {
        let apartment: Apartment = {
            id: '',
            cost: 0,
            position: {
                x: 1,
                y: 1
            },
            name: '',
            duration: 0
        };
        let subject = new ReplaySubject(1);

        subject.next(new AddFinal(apartment));

        effects.add$.subscribe((action: CustomAction) => {
            expect(action.payload).toBeTruthy();
        });
    })
})