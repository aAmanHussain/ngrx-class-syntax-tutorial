import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentCreateFormComponent } from './assignment-create-form.component';

describe('AssignmentCreateFormComponent', () => {
  let component: AssignmentCreateFormComponent;
  let fixture: ComponentFixture<AssignmentCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
