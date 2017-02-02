import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { BikeInfo } from './bike-info';
import { fixedData } from './data';

@Injectable()
export class BasicService {

  constructor() { }
  getData(): Observable<BikeInfo> {
    return Observable.create((observer: Observer<BikeInfo>) => {
      observer.next(fixedData);
      observer.complete();
    })
  }
}
