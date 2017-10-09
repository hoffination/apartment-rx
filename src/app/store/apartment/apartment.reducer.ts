import {append, filter} from 'ramda';

import {CustomAction} from '../custom.action';
import {Apartment} from '../../models/apartment';
import {ADD_FINAL, REMOVE} from './apartment.actions';

export function apartmentReducer(state: Apartment[] = [], action: CustomAction): Apartment[] {
    switch (action.type) {
        case ADD_FINAL:
            return append(action.payload, state);
        case REMOVE:
            return filter(a => a.id !== action.payload.id, state);
        default:
            return state;
    }
}
