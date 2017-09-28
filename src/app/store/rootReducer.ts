import {apartmentReducer} from './apartment/apartment.reducer';

// NOTE: these must have the same name as attributes of the AppState
export const rootReducer = {
    apartments: apartmentReducer
};
