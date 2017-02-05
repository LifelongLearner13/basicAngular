import { Component, OnInit } from '@angular/core';

import { BikeInfo } from './bike-info';
import { BasicService } from './basic.service';

@Component({
  selector: 'app-static-bike-list',
  templateUrl: './static-bike-list.component.html',
  styleUrls: ['./static-bike-list.component.css']
})
export class StaticBikeListComponent implements OnInit {
  pageTitle: string = 'Bike List';

  bikes: BikeInfo;

  constructor(private _basicService: BasicService) { }

  ngOnInit(): void {
    this._basicService.getData()
      .subscribe(bikes => this.bikes = bikes);
    console.log('Bikes: ', JSON.stringify(this.bikes))
  }

}
