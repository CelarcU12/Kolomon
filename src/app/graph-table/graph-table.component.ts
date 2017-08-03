import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { GraphSet } from '../graph-set';
import { DataService } from '../data.service';
import { Graph } from '../graph-set/graph';

@Component({
  selector: 'app-graph-table',
  templateUrl: './graph-table.component.html',
  styleUrls: ['./graph-table.component.css']
})
export class GraphTableComponent implements OnInit {
  graphData: Graph[];

  dateTo= moment().format('YYYY-MM-DD')+'%20'+moment().subtract(0,'hours').format('HH:mm')+':00'; 
  dateFrom= moment().format('YYYY-MM-DD')+'%20'+moment().subtract(12,'hours').format('HH:mm')+':00'; 

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {


  }
  getGraphData(graph: GraphSet){
        this.dataService.getGraphData(graph.plot_code, graph.partab, this.dateFrom, this.dateTo)
      .subscribe(graphData => this.graphData=graphData)
  }

}
