import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

  getCity() {
    
    return this.http.get('https://gist-geo.motc.gov.tw/api/V2/Basic/CountyList').map(res => {
      return res.json();
      }).catch(error => {
      return Observable.of<any[]>([]);
      });
  }

  constructor(private http: Http) { }

}
