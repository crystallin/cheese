import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  constructor(private AppService : AppService){
  }

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
}
