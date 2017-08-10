
//DATA SERVICE

//za pridobivanje vrednosti meritev posameznih postaj

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ApiService } from './api.service'; 

import { Station } from './station';
import { GraphSet } from './graph-set';
import { PositionSet } from './position-set';
import { Graph } from './graph-set/graph';

const urlPostaje='/api/v1/data/';

@Injectable()
export class DataService{
    url: string;
    station: string; //npr: H60
    param: number;   //kaj postaja meri (pretok, temperaturo...)
    graphData;


    constructor(
    private http: Http,
    private route: ActivatedRoute, //za pridobivanje id-jev iz url-ja
    private api: ApiService
  ) {this.url=urlPostaje; }

//metoda, ki dobi vrednosti posamezne postaje, glede na ime postaje parameter in datum
  getGraphData(name: string, param: number, date1: string, date2: string): Observable<Graph[]>{
      return this.http.get(this.url+'?station='+name+'&param='+(+param)+'&date_from='+date1+'&date_to='+date2)
      .map(graphData => graphData.json())
  }

  getViews(): Observable<Station[]>{
    return this.api.getViews()
  }
  getView(id:string): Observable<Station>{
    return this.api.getView(id)
  }
  getPosition(id1: string, id2: string ): Observable<PositionSet>{
    return this.api.getPositions(id1, id2)
  }
  getGraphSets(id1: string, id2: string ): Observable<GraphSet[]>{
    return this.api.getGraphSets(id1,id2);
  }
}