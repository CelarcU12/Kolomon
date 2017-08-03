
//DATA SERVICE

//za pridobivanje vrednosti meritev posameznih postaj

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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
    private route: ActivatedRoute //za pridobivanje id-jev iz url-ja
  ) {this.url=urlPostaje; }

//metoda, ki dobi vrednosti posamezne postaje, glede na ime postaje parameter in datum
  getGraphData(name: string, param: number, date1: string, date2: string): Observable<Graph[]>{
      return this.http.get(this.url+'?station='+name+'&param='+(+param)+'&date_from='+date1+'&date_to='+date2)
      .map(graphData => graphData.json())
  }

  getGraphValue(name: string, param: number, date1: string, date2: string): Observable<number[]>{
      return this.http.get(this.url+'?station='+name+'&param='+(+param)+'&date_from='+date1+'&date_to='+date2)
      .map(graphData => graphData.json().value)
  }

}