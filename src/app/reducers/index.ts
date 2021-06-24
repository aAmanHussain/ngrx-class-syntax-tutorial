import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { State, featureKey as classFeatureKey, classReducer } from '../features/class/store/reducers/class.reducers';
import { environment } from './../../environments/environment';

export const reducers: ActionReducerMap<any> = {
    [classFeatureKey]: classReducer
}

// console.log all actions
export const logger: any = (reducer: any) => (state: any, action: any) => {
    console.info(`action: `, action);
    return reducer(state, action);
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];