import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bouton',
  templateUrl: './bouton.component.html',
  styleUrls: ['./bouton.component.css']
})
export class BoutonComponent implements OnInit {
  @Input() text_bouton: any;
  @Input() r_text_bouton: any;
  constructor() { }

  ngOnInit() {
  }

}
// tslint:disable-next-line: max-line-length
// carousel(this.l_btn_text,this.r_btn_text) > bouton(@l_text_bouton,@r_text_bouton)
// => [l_text_bouton]='l_btn_text' [r_text_bouton]='r_btn_text'
