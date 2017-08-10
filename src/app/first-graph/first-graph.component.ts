import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PositionSet } from '../position-set';
import { DataService } from '../data.service';
import { GraphSet } from '../graph-set';

@Component({
  selector: 'app-first-graph',
  templateUrl: './first-graph.component.html',
  styleUrls: ['./first-graph.component.css'],
  //providers: [StationDetail]
})
export class FirstGraphComponent implements OnInit {
  @Input() position: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  
//navigate on same graph
  clickOnPosition(position: PositionSet){
    this.router.navigate(['/stations',this.router.url.split('/').pop(),position.id])
  }

}
