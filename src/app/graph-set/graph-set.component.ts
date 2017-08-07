import { Component, OnInit, Output } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as moment from 'moment';

import { KoledarComponent } from '../koledar/koledar.component';
import { DrsnikComponent } from '../drsnik/drsnik.component';
import { GumbiDatumComponent } from '../gumbi-datum/gumbi-datum.component';

//import {GraphTableComponent } from '../graph-table/graph-table.component';


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
  //providers: [GraphTableComponent],
  
})
export class GraphSetComponent implements OnInit {
  stationId:string;
  positionId: string;
  graphSets: GraphSet[];
  graphData: Graph[];
  selectedGraph: GraphSet;
  graphValues:number[];
  graphTime: string[];
  
  dateTo= moment().format('YYYY-MM-DD')+'%20'+moment().subtract(0,'hours').format('HH:mm')+':00'; 
  dateFrom= moment().startOf('day').format('YYYY-MM-DD')+'%20'+moment().startOf('day').format('HH:mm')+':00'; 

 plotData:any;
 public type= 'line';
 public data=[{label:"podatki", data: this.graphValues}];
 public labels=[this.graphTime];

  constructor(
      private apiService: ApiService,
      private activatedRoute: ActivatedRoute,
      private dataService : DataService,
      private appComponent: AppComponent,
      private router: Router,
      //private graphTableComponent: GraphTableComponent
  ) {   }

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
      //iz position_set dobi graph_set
      this.apiService.getGraphSets(this.stationId,this.positionId).subscribe(graph=>this.graphSets=graph)
    }
    onGraphClick(graph: GraphSet):void{
      this.selectedGraph=graph;
      this.appComponent.items[3]={label: graph.plot_code.toString()}

      //this.graphTableComponent.getGraphData(graph)
      this.dataService.getGraphData(graph.plot_code, graph.partab, this.dateFrom, this.dateTo)
      .subscribe(meritve =>{this.graphData=meritve; this.graphValues=meritve.map(a=>a.value);
                            this.graphTime=meritve.map(a=>a.date)})
      //število izbranih ur


    
      
    
    }

    changeDate($event){
 
      this.onGraphClick(this.selectedGraph)
      
      
    }


    ///plot the graph


    

}
