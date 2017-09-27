import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { MainComponent } from './layout/main/main.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC8MmSXAhAXE7Mg8lKruXDswmjHJ8rR56A'
    })
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
