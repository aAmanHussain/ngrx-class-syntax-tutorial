import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassFormService {

  constructor(private formBuilder: FormBuilder) { }

  createClassForm(): FormGroup {
    return this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(3)]],
      code: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      startDate: [null, Validators.required]
    });
  }
}
