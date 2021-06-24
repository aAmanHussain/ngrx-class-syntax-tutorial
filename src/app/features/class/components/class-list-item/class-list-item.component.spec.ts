import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassListItemComponent } from './class-list-item.component';

describe('ClassListItemComponent', () => {
  let component: ClassListItemComponent;
  let fixture: ComponentFixture<ClassListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
