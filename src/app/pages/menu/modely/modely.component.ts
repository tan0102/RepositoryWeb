import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modely',
  templateUrl: './modely.component.html',
  styleUrls: ['./modely.component.css']
})
export class ModelyComponent implements OnInit {
  showSidebar: boolean;

  tt: any;
  st: any;

  constructor() { }

  ngOnInit() {
    this.showSidebar = true;
    this.tt = 'Tesla';
    this.st = 'Model Y';

  }
}
