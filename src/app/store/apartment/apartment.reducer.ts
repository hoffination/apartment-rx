import {append, filter} from 'ramda';
import uuidv4 from 'uuid/v4';

import {CustomAction} from '../custom.action';
import {Apartment} from '../../models/apartment';
import {ApartmentActions, ADD, REMOVE} from './apartment.actions';
import {generate, getRandomArbitraryCost} from '../../services/generators/name.gen';

const MAX_COST = 4000;
const MIN_COST = 1200;

export function apartmentReducer(state: Apartment[] = [], action: CustomAction): Apartment[] {
    switch (action.type) {
        case ADD:
            return append(
                Object.assign(action.payload, {
                    id: uuidv4(),
                    name: generate(),
                    cost: getRandomArbitraryCost(MIN_COST, MAX_COST)
                }),
                state
            );
        case REMOVE:
            return filter(a => a.id !== action.payload.id, state);
        default:
            return state;
    }
}
