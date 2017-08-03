import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  items: any[];
  constructor(private router : Router){
    
  }

  //click on title 'hidrološke postaje'
   goHome(): void{
    this.router.navigate(['']);
  }
  goBack():void{
    window.history.back()
  }
  ngOnInit(){
    this.items=[];
  
   

  }
 
}
