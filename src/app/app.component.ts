import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nichaphat-port';

  constructor(
    private router: Router,
  ){ }

  selectMenu = 1;
  contentshow = 'app-home';
  
  changeMenu(val: any){
    this.selectMenu = val;
  }

  linkedIn(){
    window.open('https://www.linkedin.com/in/nichaphat-j/');
  }

  toProject(){
    this.router.navigate(['projects']);
  }
}
