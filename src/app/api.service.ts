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
  positions: PositionSet;
  stations: Station[];
  station: Station;


  constructor(
    private http: Http,
    private route: ActivatedRoute //za pridobivanje id-jev iz url-ja
  ) {this.base_url=urlPostaje; }


  getViews(): Observable<Station[]>{
    return this.http.get(this.base_url)
    .map(response => this.stations=response.json())
  }
  getView(id: string): Observable<Station>{
    return this.getViews().map(stations => stations.find(stat=> stat.id ===(+id)))
  }

  getPositions(id1: string, id2: string):Observable<PositionSet>{
    return this.getView(id1).map(pos =>pos.position_set.find(position => position.id ===(+id2)))
  }

  getGraphSets(id1: string, id2: string): Observable<GraphSet[]>{
    return this.getPositions(id1,id2).map( graph =>graph.graph_set)
  }
  getViewId(): void{
    this.route.params.subscribe(params => 
      this.idPostaje=params['id'])
      console.log(this.route.params.subscribe(params => 
      this.idPostaje=params['id']))
  }
  // getView(id: number): Observable<Station>{
  //   return this.http.get(this.base_url+'/'+(this.idPostaje))
  //   .map(response => response.json());
  // }

//   getPositions(id: string):Observable<Station> {
//     return this.http.get(this.base_url+'/'+id)
//     .map(pos=> pos.json())
// }
//   getPosition(id1: string, id2:string):Observable<PositionSet>{
//     return this.getPositions(id1)
//     .map(positions => this.positions = positions.position_set
//       .find( pos => pos.id === (+id2)))
//   }
//   getGraphSets(id1: string, id2:string): Observable<GraphSet[]>{
//     return this.getPosition(id1,id2).map(graphSets=>graphSets.graph_set)
//   }

// dobiPostajeHitreje(): Station[]{
//       this.getViews()
//     .subscribe(stat=> this.stations1=stat)
//     return this.stations1

// }
// dobiEnoPostajo(id:string): Station{
//   return this.stations1.find(pos=> pos.id ===(+id))
// }

}
