import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class TableapiService {

  constructor(private http: Http) { }

  // function to get the table records from local json to populate data in template

  getJsonInfo() {
    return this.http.get('./assets/sample_data.json').pipe(map((data: any) => data.json()));
  }

}
