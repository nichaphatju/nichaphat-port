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
      detail:`Building a web application for searching items in Ragnarok Online Landverse Market (Ragnarok Online Landverse is an NFT game).<br/>
      There're options to filter all available items in the market. I found that the API in the original website (https://apps.maxion.gg/roverse?cat=all) is publicly open, so I utilize that in my website.<br/>
      Technology I use is Node.js with Express, and Azure web hosting. The web app will be deployed automatically once the codes are pushed to main branch.<br/>`,
      gitRepo: `https://github.com/nichaphatju/ro-landverse-search-items`,
      url: `https://ro-lanverse-items.azurewebsites.net`
    },
    {
      img:'', 
      year: '2023', 
      header: 'Salesforce: LWC with Aura Page',
      subject:'Custom Send Email', 
      detail:`Custom Send Email page to be used on Task record page.<br/>
      I created a custom page instead of using the standard send email feature because users would like to send an email from task records.<br/>
      There're options to add To, and CC addresses which can be either selected from contact records or manually input by users.<br/>
      There's also the logic to binding record value into an email body.
      LWC, Aura component, and Apex class are used for this feature.`,
      gitRepo: ``,
      url: ``
    },
    {
      img:'', 
      year: '2023', 
      header: 'Salesforce: LWC with Aura Page',
      subject:'Case Submission Page', 
      detail:`SF Aura Component & LWC: Custom Create Case on Salesforce Site (Experience Cloud).<br/>
      I have created a page for external(guest) users to submit and search for submitted cases.<br/>
      The page also connected with reCAPTCHA to prevent bulk requests.`,
      gitRepo: ``,
      url: ``
    },
    {
      img:'', 
      year: '2021', 
      header: 'Java Web application integrate with Salesforce API: Insurance Customer Journey',
      subject:'Angular-Java insurance web application', 
      detail:`This project consists of 2 parts:<br/>
      Web Application for buying insurance products. This allows end users to choose the product and buy the insurance by themselves including payment and policy generator.<br/>
      Salesforce custom pages for sales reps to manage their customer information and policy.`,
      gitRepo: ``,
      url: ``
    },
    {
      img:'', 
      year: '2020', 
      header: 'Aura component: Loan calculation pages',
      subject:'Car Loan Calculation Pages', 
      detail:`The page used by sales reps to calculate and compare financial amount, interest rate depending on customer information and selected product.<br/>`,
      gitRepo: ``,
      url: ``
    },
    {
      img:'', 
      year: '2020', 
      header: 'Apex Batch & Trigger: User Management',
      subject:'User Management Process', 
      detail:`There're daily batches that integrate user information from an external system to Salesforce.<br/>
      I have implemented the logic to populate user information and add custom sharing records.<br/>
      The reason we customized sharing records was the client had complex sharing logic which couldn't be solved by using standard roles, profiles, and sharing rules.`,
      gitRepo: ``,
      url: ``
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
      detail:`As a part of my graduate project, I have built an Android application for students who would like to practice English language.<br/>
      The project consists of 2 parts: First part is an Android application for playing games. There're 2 games available: multiple choices - choose the right answer, and drag and drop spelling.<br/>
      There's also the score board to show the rank of each user.<br/>
      Part 2 is a web application for Admin/Teacher to login and customize the questions and choices.<br/>
      Technology I use was Java for Android application, and PHP with SQL and relational database (MySQL) for admins.`,
      gitRepo: ``,
      url: ``
    }
    // {img:'', year: '', subject:'Java Web application integrate with Salesforce API: Insurance Customer Journey', detail:''},
    // {img:'', year: '', subject:'SF Aura Component: Loan Calculation Pages', detail:''},
  ];

}
