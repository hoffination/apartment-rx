import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { Actions } from '@ngrx/effects';

import { Add, AddFinal, ADD_FINAL, REMOVE } from './apartment.actions';
import { ApartmentEffects } from './apartment.effects';
import { Apartment } from '../../models/apartment';
import { CustomAction } from '../custom.action';

describe('Apartment Effects', () => {
    let effects: ApartmentEffects;
    let actions: ReplaySubject<any>;

    beforeEach(() => {
        TestBed.configureTestingModule({
          providers: [
            ApartmentEffects,
            provideMockActions(() => actions),
          ],
        });
    
        effects = TestBed.get(ApartmentEffects);
    });

    it('should output a populated apartment when an ADD action is fired', () => {
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
        actions = new ReplaySubject(1);

        actions.next(new Add(apartment));

        effects.add$.subscribe((action: CustomAction) => {
            expect(action.type).toEqual(ADD_FINAL);
            let result: Apartment = action.payload;
            expect(result).toBeTruthy();
            expect(result.id.length).toBeGreaterThan(0);
            expect(result.name.length).toBeGreaterThan(0);
            expect(result.cost).toBeGreaterThan(0);
            expect(result.duration).toBeGreaterThan(0);
        });
    });

    it('should remove an apartment a while after the ADD_FINAL action is fired', () => {
        let apartment: Apartment = {
            id: 'test',
            cost: 0,
            position: {
                x: 1,
                y: 1
            },
            name: '',
            duration: 1000
        };
        actions = new ReplaySubject(1);

        actions.next(new AddFinal(apartment));

        effects.addFinal$.subscribe((action: CustomAction) => {
            expect(action.payload).toBeTruthy();
            expect(action.type).toEqual(REMOVE);
            expect(action.payload.id).toEqual(apartment.id);
        });
    });
})