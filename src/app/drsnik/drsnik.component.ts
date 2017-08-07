import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drsnik',
  templateUrl: './drsnik.component.html',
  styleUrls: ['./drsnik.component.css']
})
export class DrsnikComponent implements OnInit {
  //vrednosti drsnika
  numberOfHours: number[]=[0,12];
  constructor() { }

  ngOnInit() {
  }



/*       //še za dodelat
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
 */
}
