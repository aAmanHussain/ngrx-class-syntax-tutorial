import { CreateClassComponent } from './pages/create-class/create-class.component';
import { MyClassesComponent } from './pages/my-classes/my-classes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MyClassesComponent
  },
  {
    path: 'create',
    component: CreateClassComponent
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
export class ClassRoutingModule { }
