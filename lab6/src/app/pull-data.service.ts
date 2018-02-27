import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class PullDataService {

  constructor(private http: Http) { }
  getStudentData():Observable<any>{
    return this.http.get("https://jsonblob.com/api/get/462873b5-1bef-11e8-88aa-87847fa4a34a").map(obs => obs.json());
  }
}
