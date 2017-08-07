import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs/Observable';


import { ApiService } from '../api.service';
import { Station } from '../station';
import { PositionSet } from '../position-set';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-station-detail',
  templateUrl: './station-detail.component.html',
  styleUrls: ['./station-detail.component.css']
})
export class StationDetailComponent implements OnInit {
  stationName: string;
  stationId: string;
  positionSets: PositionSet[];
  constructor(
    private apiService : ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private appComponent: AppComponent
  ) { }

  ngOnInit() {
    //id from url
    this.activatedRoute.params.subscribe((params:Params)=>{
    this.stationId=params['id']; console.log('Kliknjena postaja: '+this.stationId)});

    
    this.getStationName();
    this.getPositions();  


    this.appComponent.items=[];
    this.appComponent.items.push({label: "Seznam postaj", url: this.appComponent.goHome()})
    this.appComponent.items.push({label:"Postaja:"+this.stationId,
         url:this.router.navigate(['/station',this.stationId])})
    



  }
  onPositionClick(position: PositionSet): void{
    this.router.navigate(['/station',this.stationId,position.id])
  }
  getPositions(){
    this.apiService.getPositions(this.stationId)
    .subscribe(position=> this.positionSets=position.position_set)
  }
  getStationName(){
    this.apiService.getPositions(this.stationId)
    .subscribe(station => this.stationName=station.name, err=> console.log(this.stationName))
  }


  

}
