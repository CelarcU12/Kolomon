import { Component, OnInit, Output } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as moment from 'moment';

import { StationListComponent } from '../station-list/station-list.component'; 

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
  styleUrls: ['./graph-set.component.css']

})
export class GraphSetComponent implements OnInit {
  graphSets: GraphSet[];
  graphData: Graph[];
  selectedGraph: GraphSet;
  graphValues:number[];
  graphTime: string[];
  
  dateTo= moment().format('YYYY-MM-DD')+'%20'+moment().subtract(0,'hours').format('HH:mm')+':00'; 
  dateFrom= moment().startOf('day').format('YYYY-MM-DD')+'%20'+moment().startOf('day').format('HH:mm')+':00'; 

  constructor(
      private apiService: ApiService,
      private activatedRoute: ActivatedRoute,
      private dataService : DataService,
      private appComponent: AppComponent,
      private router: Router,
      //private graphTableComponent: GraphTableComponent
  ) {   }

  ngOnInit() {
    this.activatedRoute.data
    .map((data)=> data['stations'])
    .subscribe((graphSets)=> this.graphSets=graphSets);
  }

    onGraphClick(graph: GraphSet):void{
      this.selectedGraph=graph;
      this.appComponent.items[4]={label: graph.plot_code.toString()}

      //this.graphTableComponent.getGraphData(graph)
      this.dataService.getGraphData(graph.plot_code, graph.partab, this.dateFrom, this.dateTo)
      .subscribe(meritve =>{this.graphData=meritve; this.graphValues=meritve.map(a=>a.value);
                            this.graphTime=meritve.map(a=>a.date)})
      //število izbranih ur

    }

}
