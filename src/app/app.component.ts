import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private router : Router){}

  //click on title 'hidrološke postaje'
   goHome(): void{
    this.router.navigate(['']);
  }
 
}
