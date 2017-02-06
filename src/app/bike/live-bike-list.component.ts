import { Component, OnInit } from '@angular/core';
import { BikeInfo } from './bike-info';

import { HttpService } from './http.service';

@Component({
  selector: 'app-live-bike-list',
  templateUrl: './live-bike-list.component.html',
  styleUrls: ['./live-bike-list.component.css']
})
export class LiveBikeListComponent implements OnInit {
  pageTitleStart: string = 'Citi Bike Station Data from ';
  bikes: BikeInfo;
  errorMessage: string;

  constructor(private _httpService: HttpService) { }

  ngOnInit(): void {
    this._httpService.getData()
      .subscribe(bikes => this.bikes = bikes,
                 error => this.errorMessage = <any>error);
  }

}
