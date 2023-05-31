import { Action, createReducer, on } from '@ngrx/store';
import { AddItemAction } from '../actions/breed.action';
import { IDogBreed } from '../models/IDogBreed';

const initialState: Array<IDogBreed> = [
    {
        id: 1,
        name: "Border Collie",
        img: "",
        shortBio: "",
        longBio: ""
    }
]
const reducer = createReducer(
   initialState,
   on(AddItemAction, (state, action) => {
      return [...state, action.payload]
   })
);

export function BreedReducer(state: Array<IDogBreed> | undefined, action: Action) {
  return reducer(state, action);
}
