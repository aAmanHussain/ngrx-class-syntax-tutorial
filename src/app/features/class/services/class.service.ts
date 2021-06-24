import { map, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { v4 as getUniqueId } from 'uuid';
import { of } from 'rxjs';

import { WkClass } from './../models/class.model';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private httpClient: HttpClient) { }

  loadClasses() {
    return this.httpClient.get('../../../../assets/db/classes-response.json').pipe(
      mergeMap(({ data }: any) => of(data))
    );
  }

  addClass(classDetails: WkClass) {
    const classPayload  = {
      ...classDetails,
      id: getUniqueId()
    };
    return of(classPayload);
  }
}
