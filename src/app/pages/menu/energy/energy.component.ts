import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.css']
})
export class EnergyComponent implements OnInit {
  tt: any;
  st: any;


  constructor() { }

  ngOnInit() {
    this.tt = 'Tesla';
    this.st = 'Power Everything';

 }

}
