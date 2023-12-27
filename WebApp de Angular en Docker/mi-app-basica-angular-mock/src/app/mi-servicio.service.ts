import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Avenger} from './Avenger';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/avengers/';
  }

  getAvenger(id) {
    return this.http.get<any>(this.url + id)
      .toPromise()
      .then(res => <Avenger> res)
      .then(data => data);
  }

}
