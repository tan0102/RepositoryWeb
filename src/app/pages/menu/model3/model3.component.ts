import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model3',
  templateUrl: './model3.component.html',
  styleUrls: ['./model3.component.css']
})
export class Model3Component implements OnInit {
  tt: any;
  st: any;

  constructor() { }

  ngOnInit() {
    this.tt = 'Tesla';
    this.st = 'Model 3';

  }

}
