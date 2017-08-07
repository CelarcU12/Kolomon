import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from '../app.component';

import { ApiService } from '../api.service';
import { Station } from '../station';


@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {
  stations: Station[]
  stationClick: Station;
  items: any[];

  constructor(
    private apiService: ApiService,
    private router: Router,
    private appComponent: AppComponent
  ) { }

  ngOnInit() {
    this.apiService.getStations()
    .subscribe(stat=> this.stations=stat)

    this.appComponent.items=[];
    this.appComponent.items.push({label: "Seznam postaj", url: this.appComponent.goHome()})
    
  }
  onStation(station: Station): void {
    this.stationClick=station
    this.router.navigate(['/station',this.stationClick.id])
  }

}
