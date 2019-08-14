import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roadster',
  templateUrl: './roadster.component.html',
  styleUrls: ['./roadster.component.css']
})
export class RoadsterComponent implements OnInit {
  showSidebar: boolean;

  tt: any;
  st: any;
  btn: any;

  constructor() { }

  ngOnInit() {
    this.showSidebar = true;
    this.tt = 'Tesla';
    this.st = 'Roadster';
    this.btn = 'CUSTOM ORDER';
  }
}
