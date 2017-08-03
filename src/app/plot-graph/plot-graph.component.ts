import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { GraphSetComponent } from '../graph-set/graph-set.component';
import {Router, ActivatedRoute, Params} from '@angular/router';



@Component({
  selector: 'app-plot-graph',
  templateUrl: './plot-graph.component.html',
  styleUrls: ['./plot-graph.component.css']
})
export class PlotGraphComponent implements OnInit {
  stationId;
  positionId;
  data: any;
  graph;
  graphValue: number;
  graphTime: string;
  constructor(
      private graphSetComponent: GraphSetComponent,
       private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params:Params)=>{
    this.stationId=params['id1'];
    this.positionId=params['id2'];})

    this.graphSetComponent.getGraphs
    
    
  }


}
