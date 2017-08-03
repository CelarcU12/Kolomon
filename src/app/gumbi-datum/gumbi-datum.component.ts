import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { GraphSet } from '../graph-set';
import { GraphSetComponent} from'../graph-set/graph-set.component';

import * as moment from 'moment';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-gumbi-datum',
  templateUrl: './gumbi-datum.component.html',
  styleUrls: ['./gumbi-datum.component.css']
})
export class GumbiDatumComponent implements OnInit {
  
  graph: any;
  dateTo: any;
  dateFrom: any

  constructor(
    private graphSet:GraphSetComponent
  ) { }

  

  ngOnInit() {
    
  }

/*   polDneva(): Promise<GraphSet>{
     this.dateTo=  moment().format('YYYY-MM-DD')+'%20'+moment().format('HH:mm')+':00'; 
     this.dateFrom=  moment().format('YYYY-MM-DD')+'%20'+moment().subtract(12,'hours').format('HH:mm')+':00'; 
    this.graphSet.getGraphs().then(graph=> this.graph=graph)
    return this.graphSet.onGraphClick(this.graph,this.dateTo,this.dateFrom)
  
  } */

}
