import { combineLatest, Observable, Subject } from 'rxjs/';
import { takeUntil } from 'rxjs/operators';
import { WkClass } from './../../models/class.model';
import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { State } from '../../store/reducers/class.reducers';
import * as ClassActions from '../../store/actions/class.actions';
import * as fromClass from '../../store/selectors/class.selectors';

@Component({
  selector: 'app-my-classes',
  templateUrl: './my-classes.component.html',
  styleUrls: ['./my-classes.component.scss']
})
export class MyClassesComponent implements OnInit, OnDestroy {
  unsubscribe = new Subject();
  classesLoaded$: Observable<boolean>;
  classError$: Observable<Error>;
  classes$: Observable<WkClass[]>;

  constructor(private store: Store<State>) {
    this.classesLoaded$ = this.store.select(fromClass.getClassesLoaded$);
    this.classes$ = this.store.select(fromClass.getClasses$);
    this.classError$= this.store.select(fromClass.getClassError$);
  }

  ngOnInit(): void {
    this.loadClasses();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  loadClasses(): void {
    combineLatest(
      [this.classesLoaded$]
    )
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(([loaded]) => {
      if (loaded) {
        return;
      }
      this.store.dispatch(new ClassActions.LoadClassesAction());
    });
  }

  handleDeleteClass(id: string): void {
    this.store.dispatch(new ClassActions.DeleteClassAction(id));
  }
}
