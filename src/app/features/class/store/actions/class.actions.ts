import { WkClass } from './../../models/class.model';
import { Action } from '@ngrx/store';

export const LOAD_CLASSES = `[CLASS] LOAD_CLASSES`;
export class LoadClassesAction implements Action {
  type = LOAD_CLASSES;
  constructor() {}
}

export const LOADED_CLASSES = `[CLASS] LOADED_CLASSES`;
export class LoadedClassesAction implements Action {
  type = LOADED_CLASSES;
  constructor(public payload: WkClass[]) {}
}

export const CLASS_ERROR = `[CLASS] CLASS_ERROR`;
export class ClassErrorAction implements Action {
  type = CLASS_ERROR;
  constructor(public payload: Error) {}
}

export const ADD_CLASS = `[CLASS] ADD_CLASS`;
export class AddClassAction implements Action {
  type = ADD_CLASS;
  constructor(public payload: WkClass) {}
}

export const ADDED_CLASS = `[CLASS] ADDED_CLASS`;
export class AddedClassAction implements Action {
  type = ADDED_CLASS;
  constructor(public payload: WkClass) {}
}

export const DELETE_CLASS = `[CLASS] DELETE_CLASS`;
export class DeleteClassAction implements Action {
  type = DELETE_CLASS;
  constructor(public payload: string) {}
}

export type Actions =
  | LoadClassesAction
  | LoadedClassesAction
  | ClassErrorAction
  | AddClassAction
  | DeleteClassAction;