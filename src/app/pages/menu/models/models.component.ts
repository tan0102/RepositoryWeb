import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
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
