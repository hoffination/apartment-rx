import {append, filter} from 'ramda';
import uuidv4 from 'uuid/v4';

import {CustomAction} from '../custom.action';
import {Apartment} from '../../models/apartment';
import {ApartmentActions, ADD, REMOVE} from './apartment.actions';

export function apartmentReducer(state: Apartment[] = [], action: CustomAction): Apartment[] {
    switch (action.type) {
        case ADD:
            return append(
                Object.assign(action.payload, { id: uuidv4()}),
                state
            );
        case REMOVE:
            return filter(a => a.id !== action.payload.id, state);
        default:
            return state;
    }
}
