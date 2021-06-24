import { WkClass } from './../../models/class.model';
import { ClassFormService } from './../../services/class-form.service';
import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-class-form',
  templateUrl: './create-class-form.component.html',
  styleUrls: ['./create-class-form.component.scss']
})
export class CreateClassFormComponent {
  @Output() addClassEmitter = new EventEmitter<WkClass>();
  classForm: FormGroup;
  submitted: boolean = false;
  constructor(private classFormService: ClassFormService) {
    this.classForm = this.classFormService.createClassForm();
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.classForm.invalid) {
      return;
    }

    this.addClassEmitter.emit(this.classForm.value);
  }

}
