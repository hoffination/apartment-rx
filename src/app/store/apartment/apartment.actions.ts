import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { CustomAction } from '../custom.action';
import { AppState } from '../../models/appState';
import { Apartment } from '../../models/apartment';

export const ADD = 'ADD';
export const ADD_FINAL = 'ADD_FINAL';
export const REMOVE = 'REMOVE';

export class Add implements CustomAction {
    readonly type = ADD;
}

export class AddFinal implements CustomAction {
    readonly type = ADD_FINAL;
    constructor(public payload: Apartment) {}
}

export class Remove implements CustomAction {
    readonly type = REMOVE;
    constructor(public payload: {id: string}) {}
}

@Injectable()
export class ApartmentActions {
    constructor(private store: Store<AppState>) {}

    add() {
        this.store.dispatch(new Add());
    }

    remove(id: string) {
        this.store.dispatch(new Remove({ id }));
    }
}
