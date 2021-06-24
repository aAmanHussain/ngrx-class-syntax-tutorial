import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentsRoutingModule } from './assignments-routing.module';
import { MyAssignmentsComponent } from './pages/my-assignments/my-assignments.component';
import { AssignmentListItemComponent } from './components/assignment-list-item/assignment-list-item.component';
import { AssignmentCreateFormComponent } from './components/assignment-create-form/assignment-create-form.component';
import { CreateAssignmentComponent } from './pages/create-assignment/create-assignment.component';


@NgModule({
  declarations: [MyAssignmentsComponent, AssignmentListItemComponent, AssignmentCreateFormComponent, CreateAssignmentComponent],
  imports: [
    CommonModule,
    AssignmentsRoutingModule
  ]
})
export class AssignmentsModule { }
