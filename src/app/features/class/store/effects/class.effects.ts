import { ClassService } from './../../services/class.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as ClassActions from '../actions/class.actions';
import { ClassFormService } from './../../services/class-form.service';
import { WkClass } from './../../models/class.model';

@Injectable()
export class ClassEffects {
  @Effect()
  loadClassesEffect$ = this.actions.pipe(
    ofType(ClassActions.LOAD_CLASSES),
    mergeMap(() =>
      this.classService.loadClasses().pipe(
        map(
          (payload: WkClass[]) => new ClassActions.LoadedClassesAction(payload)
        ),
        catchError((err: Error) => {
          const payload = new Error(err.message);
          return of(new ClassActions.ClassErrorAction(payload));
        })
      )
    )
  );

  @Effect()
  addClassEffect$ = this.actions.pipe(
    ofType(ClassActions.ADD_CLASS),
    mergeMap(({ payload }: ClassActions.AddClassAction) =>
      this.classService.addClass(payload).pipe(
        map((res: WkClass) => new ClassActions.AddedClassAction(res)),
        catchError((err: Error) => {
          const payload = new Error(err.message);
          return [new ClassActions.ClassErrorAction(payload)];
        })
      )
    )
  );

  @Effect({ dispatch: false })
  addedClassEffect$ = this.actions.pipe(
    ofType(ClassActions.ADDED_CLASS),
    map(({ payload }: ClassActions.AddedClassAction) => payload),
    mergeMap(classD => {
        alert(`class ${JSON.stringify(classD)}`);
        this.router.navigate(['/class']);
        return [];
    })
  );

  @Effect({ dispatch: false })
  deleteClassEffect$ = this.actions.pipe(
    ofType(ClassActions.DELETE_CLASS),
    map(({ payload }: ClassActions.DeleteClassAction) => payload),
    mergeMap((id) => {
      alert(`Class deleted id: ${id}`);
      return [];
    })
  );

  constructor(
    private actions: Actions,
    private classFormService: ClassFormService,
    private router: Router,
    private classService: ClassService
  ) {}
}
