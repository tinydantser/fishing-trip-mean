import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleLogin() {
    this.loggedIn = !this.loggedIn;
  }
}
