import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  educations = [{ title: 'Bachelor\'s Degree', detail: 'Computer Engineering Education', university: 'KMITL' }];
  certificates = [{ title: 'Salesforce Developer I' }, { title: 'Salesforce Developer II' }];

  ngOnInit(): void {
  }

}
