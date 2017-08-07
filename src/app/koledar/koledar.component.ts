import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-koledar',
  templateUrl: './koledar.component.html',
  styleUrls: ['./koledar.component.css']
})
export class KoledarComponent implements OnInit {
  date_from;
  date_to;

  constructor() { }

  ngOnInit() {
  }

}
