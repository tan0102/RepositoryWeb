import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modelx',
  templateUrl: './modelx.component.html',
  styleUrls: ['./modelx.component.css']
})
export class ModelxComponent implements OnInit {
  showSidebar: boolean;

  tt: any;
  st: any;

  constructor() { }

  ngOnInit() {
    this.showSidebar = true;
    this.tt = 'Tesla';
    this.st = 'Power Everything';

  }
}
