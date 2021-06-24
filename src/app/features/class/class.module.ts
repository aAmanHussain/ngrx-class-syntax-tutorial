import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';
import { CreateClassComponent } from './pages/create-class/create-class.component';
import { MyClassesComponent } from './pages/my-classes/my-classes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClassListItemComponent } from './components/class-list-item/class-list-item.component';
import { CreateClassFormComponent } from './components/create-class-form/create-class-form.component';


@NgModule({
  declarations: [
    CreateClassComponent,
    MyClassesComponent,
    ClassListItemComponent,
    CreateClassFormComponent
  ],
  imports: [
    CommonModule,
    ClassRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClassModule { }
