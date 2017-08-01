import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Station } from './station';
import { POSTAJE } from './memory';
import { PositionSet } from './position-set';
import { ApiService } from './api.service';

@Injectable()
export class StationService {

  constructor(
    private http: Http,
    private apiService : ApiService) { }
    getStations(): Promise<Station[]>{
    return Promise.resolve(POSTAJE);
  }
  getStation(id: number): Promise<Station>{
    return this.getStations()
    .then(stations => stations.find(station => station.id === id));
  }

}
