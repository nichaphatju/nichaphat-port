import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  experiences = [
    {time: 'Sep 2022 - Present', position:'Salesforce Consultant', 
      company: {
        name: 'ASG Group',
        website: 'https://www.asggroup.com.au/'
      }, 
      detail: '•	Working with team and business to migrate current features and data from three existing salesforce instances into one instance. \n •	Implement new features to create recurring tasks, and activities, sending email page to remind users to send reports via email using lightning aura component and lightning web component.'
    },
    {time: 'Jul 2021 – Jul 2022', position:'Salesforce Developer', 
      company: {
        name: 'Beryl8',
        website: 'https://www.beryl8.com/en/home'
      }, 
      detail: 'test'
    },
    {time: 'Jan 2021 – Jul 2021', position:'Technical Consultant', 
      company: {
        name: 'Beryl8',
        website: 'https://www.beryl8.com/en/home'
      }, 
      detail: 'test'
    },
    {time: 'Apr 2018 – Dec 2020', position:'Senior Salesforce Developer', 
      company: {
        name: 'Motif Technology',
        website: 'https://www.linkedin.com/company/motif-technology-public-company-limited'
      }, 
      detail: 'test'}];

  ngOnInit(): void {
  }

}
