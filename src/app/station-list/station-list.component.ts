import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from '../app.component';

import { ApiService } from '../api.service';
import { Station } from '../station';

import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {


  stations: Station[]=[];
  stationClick: Station;


  constructor(
    private apiService: ApiService,
    private router: Router,
    private appComponent: AppComponent,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.data
    .map((data)=> data['stations'])
    .subscribe((stations)=> this.stations=stations);
        
  }

//preusmeritev na drugo stran
  clickOnStation(station: Station){
    this.router.navigate(['/stations', station.id])
  }

}