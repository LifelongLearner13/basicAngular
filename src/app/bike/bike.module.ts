import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BasicService} from './basic.service';
import { HttpService } from './http.service';

import { StaticBikeListComponent } from './static-bike-list.component';
import { LiveBikeListComponent } from './live-bike-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'static-bike', component: StaticBikeListComponent },
      { path: 'live-bike', component: LiveBikeListComponent },
    ])
  ],
  declarations: [
    StaticBikeListComponent,
    LiveBikeListComponent,
  ],
  providers: [
    BasicService,
    HttpService,
  ],
})
export class BikeModule { }
