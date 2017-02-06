import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { BikeInfo } from './bike-info';

@Injectable()
export class HttpService {
  private _apiUrl = 'http://feeds.citibikenyc.com/stations/stations.json';

  constructor(private _http: Http) { }

  getData(): Observable<BikeInfo> {
    return this._http.get(this._apiUrl)
      .map((response: Response) => <BikeInfo[]>response.json())
      .catch(this.handleError);
  }

  // This is only for demonstration, in production errors would be handled better
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
