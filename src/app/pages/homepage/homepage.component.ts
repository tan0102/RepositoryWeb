import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  bouton: string[];
  constructor() { }

  ngOnInit() {
    this.bouton = ['custom', 'custom', 'custom'];
    window.addEventListener('scroll', this.scroll, true); // third parameter
  }
  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }
  scroll = (): void => {

    }

}


