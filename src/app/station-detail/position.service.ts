import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/map';

import { Station } from '../station';
import { PositionSet } from '../position-set';
import { ApiService } from '../api.service';

@Injectable()
export class PositionService{
positions: PositionSet[];
pozicija: Position;
graph: any[];
id: string;
private url='/api/v1/views'

constructor( private route: ActivatedRoute,
            private apiService : ApiService,
            private http: Http){  }


getId():void{
    this.route.params.subscribe(params => 
      this.id=params['id'], err=> console.log(this.id))
}
getPositionFromId(): Promise<PositionSet[]>{
    return this.http.get(this.url+this.id).toPromise()
    .then(response => response.json(), 
err=> console.log(this.id));
  }
getPosition(id: string):Observable<Station> {
    return this.http.get(this.url+'/'+id)
    .map(pos=> pos.json())
}
}
