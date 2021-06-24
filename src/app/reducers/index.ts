import { ActionReducerMap } from '@ngrx/store';
import { State, featureKey as classFeatureKey, classReducer } from '../features/class/store/reducers/class.reducers';

export const reducers: ActionReducerMap<any> = {
    [classFeatureKey]: classReducer
}