import uuidv4 from 'uuid/v4';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { CustomAction } from '../store/custom.action';
import { ADD, ApartmentActions, AddFinal } from '../store/apartment/apartment.actions';

import { generate, getRandomArbitraryCost } from './generators/name.gen';
import { Apartment } from '../models/apartment';

const MAX_COST = 4000;
const MIN_COST = 1200;

@Injectable()
export class ApartmentEffects {

    constructor(private actions$: Actions, private apartmentActions: ApartmentActions) {}

    @Effect()
    add$: Observable<CustomAction> = this.actions$
        .ofType(ADD)
        .map((action: CustomAction) => action.payload)
        .map((action: Apartment) => new AddFinal(
            Object.assign({}, action, {
                id: uuidv4(),
                name: generate(),
                cost: getRandomArbitraryCost(MIN_COST, MAX_COST)
            })
        ));
}