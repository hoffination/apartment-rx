import {append, filter} from 'ramda';

import {CustomAction} from '../custom.action';
import {Apartment} from '../../models/apartment';
import {ApartmentActions, ADD, REMOVE} from './apartment.actions';

export function apartmentReducer(state: Apartment[] = [], action: CustomAction): Apartment[] {
    console.log('got action');
    switch (action.type) {
        case ADD:
            console.log('action was add', append(action.payload, state));
            return append(action.payload, state);
        case REMOVE:
            return filter(a => a.id !== action.payload.id, state);
        default:
            return state;
    }
}
