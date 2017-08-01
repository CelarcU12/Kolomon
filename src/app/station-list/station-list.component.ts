import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import 'rxjs/add/operator/toPromise';
import {Header} from 'primeng/primeng';
import {Footer} from 'primeng/primeng';
import {TreeTableModule,TreeNode,SharedModule} from 'primeng/primeng';

import { StationService } from '../station.service';
import { ApiService } from '../api.service';
import { Station } from '../station';


@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {
  stations;
  stationClick;

  constructor(
    private stationService: StationService,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    //this.stationService.getStations().then(stations => this.stations = stations )
    this.apiService.getStationOb()
    .subscribe(stat=> this.stations=stat)
 /*    this.apiService.getStations()
    .then(stations => this.stations=stations); */
  }
  onStation(station: Station): void {
    this.stationClick=station;
    this.router.navigate(['/station',station.id])
  }

}
