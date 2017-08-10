import { Component, OnInit, Input } from '@angular/core';
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
  @Input()  position: PositionSet

  stationId: string;
  positionSets: PositionSet[];

  constructor(
    private apiService : ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private appComponent: AppComponent
  ) { }

  ngOnInit() {
    this.activatedRoute.data
    .map((data)=> data['stations'])
    .subscribe((station)=> this.positionSets=station);


    //id from url
    this.activatedRoute.params.subscribe((params:Params)=>{
    this.stationId=params['id']; console.log('Kliknjena postaja: '+this.stationId)});

  }
  onPositionClick1(position: PositionSet): void{
    this.router.navigate(['/stations',this.stationId,position.id]);
  }


  clickOnPosition(position: PositionSet){
    this.router.navigate(['/stations',this.stationId,position.id]);
  }


  

}
