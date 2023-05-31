import { createAction, props } from '@ngrx/store';
import { IDogBreed } from '../models/IDogBreed';
export enum BreedActionType {
  ADD_ITEM = '[Breed] Add Breed',
}
export const AddItemAction = createAction(
    '[SHOPPING] Add Item',
    props<{payload: IDogBreed}>()
  );