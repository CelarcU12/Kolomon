import { Component, OnInit, OnChanges, SimpleChange  } from '@angular/core';
import { Router, NavigationEnd,UrlTree } from '@angular/router';

import { Station } from './station';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  items: any[];
  sprememba: string
 change: SimpleChange;


  constructor(private router : Router){ 
        router.events.subscribe( change=> 
        this.onNavigationChange());
  }

  //click on title 'hidrološke postaje'
   goHome(): void{
    this.router.navigate(['']);
  }
  goBack():void{
    window.history.back()
  }

onNavigationChange(){
  this.items=[];
  let url= this.router.url.split('/');
  let basePath: string="";
  for (let item of url ){
    if(item== ''){item='Hidrološke postaje'} else {basePath = basePath +"/" +item;}
    this.items.push({label: item, url:basePath})
  }
}
ngOnInit(){}
  
 
}
