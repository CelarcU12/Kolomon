import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as moment from 'moment';

import { KoledarComponent } from '../koledar/koledar.component';
import { DrsnikComponent } from '../drsnik/drsnik.component';
import { GumbiDatumComponent } from '../gumbi-datum/gumbi-datum.component';

import {GraphTableComponent } from '../graph-table/graph-table.component';


import { ApiService } from '../api.service';
import { GraphSet } from '../graph-set';
import { PositionSet } from '../position-set';
import { DataService } from '../data.service';

import { AppComponent } from '../app.component';
import { Graph } from './graph';

@Component({
  selector: 'app-graph-set',
  templateUrl: './graph-set.component.html',
  styleUrls: ['./graph-set.component.css'],
  providers: [GraphTableComponent]
})
export class GraphSetComponent implements OnInit {
  stationId:string;
  positionId: string;
  graphs: GraphSet[];
  graphData: Graph[];
  selectedGraph: GraphSet;
  graphValues:number[];
  numberOfHours: number[]=[1,2];
  dateTo= moment().format('YYYY-MM-DD')+'%20'+moment().subtract(this.numberOfHours[0],'hours').format('HH:mm')+':00'; 
  dateFrom= moment().format('YYYY-MM-DD')+'%20'+moment().subtract(this.numberOfHours[1],'hours').format('HH:mm')+':00'; 
  /* date_to:Date;
  date_from: Date; */
 

  plotGraph;


  dateInput;
  activeItem=[1,0,0];

  constructor(
      private apiService: ApiService,
      private activatedRoute: ActivatedRoute,
      private dataService : DataService,
      private appComponent: AppComponent,
      private router: Router,
      private graphTableComponent: GraphTableComponent
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params:Params)=>{
    this.stationId=params['id1'];
    this.positionId=params['id2'];})
    this.getGraphs()

    
   this.appComponent.items=[];
    this.appComponent.items.push({label: "Seznam postaj", url: this.appComponent.goHome()})
    this.appComponent.items.push({label:"Postaja:"+this.stationId,
         url:this.router.navigate(['/station',this.stationId])})
    this.appComponent.items.push({label:"Positions:"+this.positionId,
         url:this.router.navigate(['/station',this.stationId,this.positionId])})
  
  
    
  }


//pridobi position_set in iz nje izlušči samo seznam grafov 
//glede na id postaje in id pozicije
    getGraphs(): void{
      this.apiService.getPosition(this.stationId,this.positionId).subscribe(graph => this.graphs=graph.graph_set)
    }
    onGraphClick(graph: GraphSet):void{
      this.selectedGraph=graph;
      this.graphTableComponent.getGraphData(graph)
      //število izbranih ur

      //še za dodelat
      //problem: če uporabnik gleda za več ur nazaj, kot je današnja ura ...
      if (this.numberOfHours[1]> (+moment().startOf('day').fromNow())){
        this.dateFrom= moment().subtract(1,'days').format('YYYY-MM-DD')+'%20'+moment().subtract(this.numberOfHours[1],'hours').format('HH:mm')+':00';
      }
      else if ((this.numberOfHours[0]> (+moment().startOf('day').fromNow()))){
        this.dateTo= moment().subtract(1,'days').format('YYYY-MM-DD')+'%20'+moment().subtract(this.numberOfHours[0],'hours').format('HH:mm')+':00';
        this.dateFrom= moment().subtract(1,'days').format('YYYY-MM-DD')+'%20'+moment().subtract(this.numberOfHours[1],'hours').format('HH:mm')+':00';
      }
      else{
      this.dateTo= moment().format('YYYY-MM-DD')+'%20'+moment().subtract(this.numberOfHours[0],'hours').format('HH:mm')+':00'; 
      this.dateFrom= moment().format('YYYY-MM-DD')+'%20'+moment().subtract(this.numberOfHours[1],'hours').format('HH:mm')+':00'; 
      }
      this.dataService.getGraphData(graph.plot_code, graph.partab, this.dateFrom, this.dateTo)
      .subscribe(graphData => this.graphData=graphData)

      this.dataService.getGraphValue(graph.plot_code, graph.partab, this.dateFrom, this.dateTo)
      .subscribe(data => this.graphValues=data)
      
    
      this.appComponent.items[3]={label: graph.plot_code.toString()}
    
    }

    changeDate($event){
 
      this.onGraphClick(this.selectedGraph)
      
      
    }


    ///plot the graph

    //graphss= this.graphData.filter(value=>  value.value);

}
