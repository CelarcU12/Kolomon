import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Station } from './station';

const urlPostaje='/api/v1/views';

@Injectable()
export class ApiService {
  idPostaje: number;
  base_url: string;
  constructor(
    private http: Http,
    private route: ActivatedRoute //za pridobivanje id-jev iz url-ja
  ) {this.base_url=urlPostaje; }

  getStations(): Promise<Station[]>{
    return this.http.get(`${this.base_url}`).toPromise()
    .then(response => response.json());
  }
  getStationOb(): Observable<Station[]>{
    return this.http.get(this.base_url)
    .map(post => post.json())
  }

  getStationId(): void{
    this.route.params.subscribe(params => 
      this.idPostaje=params['id'])
      console.log(this.route.params.subscribe(params => 
      this.idPostaje=params['id']))
  }
  getStation(id: number): Observable<Station>{
    this.getStationId()
    return this.http.get(this.base_url+'/'+(id))
    .map(response => response.json());
  }

}
