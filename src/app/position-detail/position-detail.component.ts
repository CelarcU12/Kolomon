import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

import { PositionSet } from '../position-set';

import * as moment from 'moment';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Graph } from '../graph-set/graph';

export class graphData{
  name: string;
  partab: number;
  value: number[];
  time: string[];
}

@Component({
  selector: 'app-position-detail',
  templateUrl: './position-detail.component.html',
  styleUrls: ['./position-detail.component.css']
})
export class PositionDetailComponent implements OnInit {
  @Input() position: PositionSet

  graphDatas: graphData[];
  graphValues: number[];
  graphTimes: string[];
  dateTo= moment().format('YYYY-MM-DD')+'%20'+moment().subtract(0,'hours').format('HH:mm')+':00'; 
  dateFrom= moment().startOf('day').format('YYYY-MM-DD')+'%20'+moment().startOf('day').format('HH:mm')+':00'; 

  constructor(
     private dataService : DataService
  ) {}

  ngOnInit() {
    this.getGraphData()
  }

  getGraphData():graphData[]{
    this.graphDatas=[];
    for (let el of this.position.graph_set){

      // this.dataService
      //   .getGraphData(el.plot_code, el.partab, this.dateFrom, this.dateTo)
      //   .subscribe(meritve => {
      //     this.graphValues=meritve.map(a=>a.value); 
      //     this.graphTimes=meritve.map(t=>t.date);
          this.getData(el.plot_code, el.partab, this.dateFrom, this.dateTo)
          .subscribe(graph => {
            this.graphValues=graph.map(v=>v.value);
            this.graphTimes=graph.map(t=> t.date);
             this.graphDatas.push({name: el.plot_code, partab: el.partab, value: this.graphValues, time: this.graphTimes})
          })
         
      
                           
      
    }
    return this.graphDatas
  }

  getData(plot_code, partab, dateFrom, dateTo): Observable<Graph[]>{
    return this.dataService.getGraphData(plot_code, partab, dateFrom, dateTo)
  
  }

}
