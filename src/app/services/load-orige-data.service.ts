import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Businese } from '../class/businese';


@Injectable({
  providedIn: 'root'
})
export class LoadOrigeDataService {
  constructor(private httpclient: HttpClient) { }
  static temp: Businese[] = [] ;
  getbusinessdata(url: string) {
    // console.log(LoadOrigeDataService.temp + 'w');
    return this.httpclient.get<Businese[]>(url) ;
  }
}
