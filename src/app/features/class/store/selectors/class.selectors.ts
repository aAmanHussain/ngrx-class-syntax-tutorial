import { featureKey } from './../reducers/class.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers/class.reducers';

export const classFeatureState = createFeatureSelector<State>(featureKey);

export const getClassesLoaded$ = createSelector(
  classFeatureState,
  ({ classesLoaded }: State) => classesLoaded
);

export const getClasses$ = createSelector(
  classFeatureState,
  ({ classes }: State) => classes
);

export const getClassError$ = createSelector(
  classFeatureState,
  ({ classError }: State) => classError
);
