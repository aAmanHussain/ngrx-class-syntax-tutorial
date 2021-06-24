import { WkClass } from './../../models/class.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-class-list-item',
  templateUrl: './class-list-item.component.html',
  styleUrls: ['./class-list-item.component.scss']
})
export class ClassListItemComponent {
  @Input() classDetails: WkClass | any = null;
  @Output() deleteClassEmitter = new EventEmitter<string>();
  constructor() {}

  deleteClass(id: string): void {
    this.deleteClassEmitter.emit(id);
  }
}
