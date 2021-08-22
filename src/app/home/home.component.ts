import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  
  linkedIn(){
    window.open('https://www.linkedin.com/in/nichaphat-j/');
  }

  toProject(){
    this.router.navigate(['projects']);
  }

}
