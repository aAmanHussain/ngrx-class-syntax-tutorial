import { LayoutComponent } from './shared/components/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'classes',
        loadChildren: () => import('./features/class/class.module').then(m => m.ClassModule)
      },
      {
        path: 'assignments',
        loadChildren: () => import('./features/assignments/assignments.module').then(m => m.AssignmentsModule)
      },
      {
        path: '',
        redirectTo: 'classes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'classes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
