import {append, filter} from 'ramda';

import {CustomAction} from '../custom.action';
import {Apartment} from '../../models/apartment';
import {ApartmentActions, ADD, REMOVE} from './apartment.actions';

export function apartmentReducer(state: Apartment[] = [], action: CustomAction): Apartment[] {
    switch (action.type) {
        case ADD:
            return append(action.payload, state);
        case REMOVE:
            return filter(a => a.id !== action.payload.id, state);
        default:
            return state;
    }
}
