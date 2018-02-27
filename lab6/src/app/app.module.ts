import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{PullDataService} from './pull-data.service';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [PullDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
