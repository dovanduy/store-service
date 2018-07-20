import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class StoreService<T> {
    constructor(
        private store: Store<T>
    ) { }
}