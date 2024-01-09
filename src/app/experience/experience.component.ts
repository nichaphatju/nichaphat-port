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
        name: 'NRI Australia & New Zealand (Formerly known as ASG Group)',
        website: 'https://www.asggroup.com.au/'
      }, 
      detail: `•	Working with team and business to migrate current features and data from three existing salesforce instances into one instance.
      <br/> •	Implement new features to create recurring tasks, and activities, sending email page to remind users to send reports via email using lightning aura component and lightning web component.`
    },
    {time: 'Jul 2021 – Jul 2022', position:'Salesforce Developer', 
      company: {
        name: 'ExxonMobil Thailand (belong to Pantheon Corperation Thailand)',
        website: ''
      }, 
      detail: `•	Be a part of an agile team in ExxonMobil, both develop and maintain salesforce customized applications, permission, security settings, custom objects, and workflow.
      <br/>•	Develop customized solutions within the Salesforce platform to support online order and sales capabilities
      <br/>•	Collaborate with various business users, system engineers, and architects to ensure the design and development meet the business needs.
      `
    },
    {time: 'Apr 2018 – Jul 2021', position:'Senior Salesforce Developer - Technical Consultant', 
      company: {
        name: 'Beryl8',
        website: 'https://www.beryl8.com/en/home'
      }, 
      detail: `•	Estimate working time, Design and build custom pages, apex batch, and apex triggers, customize apex code for customers according to user’s requirement (usually focus on sales and service process) using APEX, HTML, JavaScript, Lightning, Aura component, and Visualforce Page. 
      My responsibilities include config basic standard salesforces features e.g., Flow, Process builder, and Assignment rule in financial and oil businesses.
      <br/>•	Provide REST Service API using APEX programming language to integrate with the customer system.
      <br/>•	Designed and Implemented modules, for example, a user management process, loan calculation process, and lead assignment process for an enterprise organization. 
      <br/>•	Do unit tests. Create test classes to cover at least 75% of the project code and finish the deployment which mostly uses a gearset.
      <br/>•	Create technical documents e.g., integration specifications. Consult and discuss solutions to solve issues with the IT team of customers in the meetings.
      `
    },
    {time: 'Sep 2017 - Mar 2018', position:'Freelance', 
      detail: `• Implement web application front-end and back-end parts according to customer's needs.
      <br/>•	Build front-end pages using Angular 6, Vue.js and back-end REST API Service according to the design specification using JAVA Spring boot, Hibernate, and SQL with a team in Legal Management System and Contractor control management system.
      `
    },
    {time: 'Apr 2018 – Dec 2020', position:'Software Engineer', 
      company: {
        name: 'Motif Technology',
        website: 'https://www.linkedin.com/company/motif-technology-public-company-limited'
      }, 
      detail: `•	Developed and improve enterprise web applications in the role of Software Engineer using HTML, CSS, JSP, JAVA Struts 1, Spring MVC, Hibernate, and SQL. 
      <br/>•	Supported and had meetings with clients as a maintenance agreement team, maintain, fix issues, and improved (CR) existing web applications as reported by customers including unit tests and deployment.
      `}];

  ngOnInit(): void {
  }

}
