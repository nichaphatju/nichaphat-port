import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  selectMenu = 1;

  @Output() changeMenuEvt = new EventEmitter<number>();

  changeMenu(value: number) {
    this.changeMenuEvt.emit(value);
  }


  ngOnInit(): void {
  }

}
