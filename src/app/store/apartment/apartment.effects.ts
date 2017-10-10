import uuidv4 from 'uuid/v4';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { CustomAction } from '../custom.action';
import { ADD, ADD_FINAL, AddFinal, Remove } from './apartment.actions';

import { generate, getRandomArbitraryCost, getRandomArbitraryInteger } from '../../services/generators/name.gen';
import { Apartment } from '../../models/apartment';

const MAX_COST = 4000;
const MIN_COST = 1200;
const MAX_DURATION = 4000;
const MIN_DURATION = 1000;

@Injectable()
export class ApartmentEffects {

    constructor(private actions$: Actions) {}

    @Effect()
    add$: Observable<CustomAction> = this.actions$
        .ofType(ADD)
        .map((action: CustomAction) => action.payload)
        .map((apartment: Apartment) => new AddFinal(
            Object.assign({}, apartment, {
                id: uuidv4(),
                name: generate(),
                cost: getRandomArbitraryCost(MIN_COST, MAX_COST),
                duration: getRandomArbitraryInteger(MIN_DURATION, MAX_DURATION)
            })
        ));
    
    @Effect()
    addFinal$: Observable<CustomAction> = this.actions$
        .ofType(ADD_FINAL)
        .map((action: CustomAction) => action.payload)
        .delayWhen((apartment: Apartment) => Observable.timer(apartment.duration))
        .map((apartment: Apartment) => new Remove({ id: apartment.id }))
}