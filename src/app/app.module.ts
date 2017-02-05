import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BasicService} from './bike/basic.service';
import { StaticBikeListComponent } from './bike/static-bike-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StaticBikeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ BasicService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
