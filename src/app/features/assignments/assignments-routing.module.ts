import { MyAssignmentsComponent } from './pages/my-assignments/my-assignments.component';
import { CreateAssignmentComponent } from './pages/create-assignment/create-assignment.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MyAssignmentsComponent
  },
  {
    path: 'create',
    component: CreateAssignmentComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentsRoutingModule { }
