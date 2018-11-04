import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openNav() {
    console.log("asd");
    document.getElementById("myNav").style.height = "100%";
  }

  closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

}
