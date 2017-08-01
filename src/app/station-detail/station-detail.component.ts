import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';



import { ApiService } from '../api.service';
import { PositionService } from './position.service';
import { Station } from '../station';
import { PositionSet } from '../position-set';

@Component({
  selector: 'app-station-detail',
  templateUrl: './station-detail.component.html',
  styleUrls: ['./station-detail.component.css']
})
export class StationDetailComponent implements OnInit {
  station:Station;
  stationId;
  positionSets: PositionSet[];
  constructor(
    private apiService : ApiService,
    private activatedRoute: ActivatedRoute,
    private positionService : PositionService
  ) { }

  ngOnInit() {
    //id from url
    this.activatedRoute.params.subscribe((params:Params)=>{
    this.stationId=params['id']; console.log(this.stationId)});

    this.positionService.getPosition(this.stationId)
    .subscribe(pos => this.positionSets=pos.position_set)
  }


}
