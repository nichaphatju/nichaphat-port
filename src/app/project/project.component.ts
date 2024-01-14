import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects = [
    {
      img:'/assets/pj_ro_landverse.png', 
      year: '2024', 
      header: 'Web App: Search Items RO Landverse web app',
      subject:'Search Items RO Landverse', 
      detail:`Building web application for searching items in Ragnarok Online Landverse Market (Ragnarok Online Landverse is a NFT game).<br/>
      There're options to filter all available items in the market. I found that the API in the original website (https://apps.maxion.gg/roverse?cat=all) is publicly opened, so I utilize that in my website.<br/>
      Technology I use is Node.js with Express, and Azure web hosting. The web app will be deployed automatically once the codes are pushed to main branch.<br/>`,
      gitRepo: `https://github.com/nichaphatju/ro-landverse-search-items`,
      url: `https://ro-lanverse-items.azurewebsites.net`
    },
    {
      img:'', 
      year: '2020', 
      header: 'Android App: Manage Document Game',
      subject:'Manage Document App', 
      detail:`React: Manage Document Application for school internal use`,
      gitRepo: `https://github.com/nichaphatju/managedoc-expo`,
      url: ``
    },
    {
      img:'', 
      year: '2014', 
      header: 'Android App: English Vocab Game',
      subject:'English Vocab Practice Game', 
      detail:`As a part of graduated project, I have built an android application for students who would like to practice English language.<br/>
      The project include 2 parts: First part is an android application for playing game. Part 2 is a web application for Admin/Teacher to login and customize the questions and choices.<br/>
      Technology I use was Java for android application, and PHP with SQL and relational database (MySQL) for admins.`,
      gitRepo: ``,
      url: ``
    },
    {
      img:'', 
      year: '2023', 
      header: 'Salesforce: LWC with Aura Page',
      subject:'Custom Send Email', 
      detail:`Custom Send Email page to be used on Task record page`,
      gitRepo: ``,
      url: ``
    },
    {
      img:'', 
      year: '2023', 
      header: 'Salesforce: LWC with Aura Page',
      subject:'Case Submission Page', 
      detail:`SF Aura Component & LWC: Custom Create Case on Salesforce Experience Cloud`,
      gitRepo: ``,
      url: ``
    },
    // {img:'', year: '', subject:'Java Web application integrate with Salesforce API: Insurance Customer Journey', detail:''},
    // {img:'', year: '', subject:'SF Aura Component: Loan Calculation Pages', detail:''},
    // {img:'', year: '', subject:'SF LWC: Custom Send Email Page', detail:''},
    // {img:'', year: '', subject:'SF Aura Component & LWC: Custom Create Case on Salesforce Experience Cloud', detail:''},
  ];

}
