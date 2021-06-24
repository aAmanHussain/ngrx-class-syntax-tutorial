import { WkClass } from './../../models/class.model';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { ClassFormService } from './../../services/class-form.service';
import { State } from '../../store/reducers/class.reducers';
import * as ClassActions from '../../store/actions/class.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.scss']
})
export class CreateClassComponent implements OnInit {
  
  constructor(
    private store: Store<State>,
    protected classFormService: ClassFormService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleAddClass(payload: WkClass): void {
    this.store.dispatch(new ClassActions.AddClassAction(payload));
  }
}
