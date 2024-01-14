import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  educations = [{ logo: '/assets/logo_kmitl.png', title: 'Bachelor\'s Degree', detail: 'Computer Engineering Education', university: 'King Mongkut\'s Institute of Technology Ladkrabang, Thailand (KMITL)' }];
  certificates = [
    { logo: '/assets/logo_sfdev1.png',  title: 'Salesforce Certified Platform Developer I' }, 
    { logo: '/assets/logo_sfdev2.png', title: 'Salesforce Certified Platform Developer II' },
    { logo: '/assets/logo_jsdev1.png', title: 'JavaScript Developer I' },
    { logo: '/assets/logo_appbuilder.png', title: 'Salesforce Platform App Builder' },
    { logo: '/assets/logo_omnidev.png', title: 'Salesforce OmniStudio Developer' },
    { logo: '/assets/logo_fsc_ap.png', title: 'Salesforce Financial Services Cloud Accredited Professional' }
  ];

  ngOnInit(): void {
  }

}
