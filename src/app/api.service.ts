import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Station } from './station';
import { GraphSet } from './graph-set';
import { PositionSet } from './position-set';

const urlPostaje='/api/v1/views';

@Injectable()
export class ApiService {
  idPostaje: number;
  base_url: string;
  positions;

  constructor(
    private http: Http,
    private route: ActivatedRoute //za pridobivanje id-jev iz url-ja
  ) {this.base_url=urlPostaje; }

 /*  getStations(): Promise<Station[]>{
    return this.http.get(`${this.base_url}`).toPromise()
    .then(response => response.json());
}*/
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
    return this.http.get(this.base_url+'/'+(this.idPostaje))
    .map(response => response.json());
  }

  getPositions(id: string):Observable<Station> {
    return this.http.get(this.base_url+'/'+id)
    .map(pos=> pos.json())
}
  getPosition(id1: string, id2:string):Observable<PositionSet>{
    return this.getPositions(id1)
    .map(positions => this.positions = positions.position_set
      .find( pos => pos.id === (+id2)))
  }



}
