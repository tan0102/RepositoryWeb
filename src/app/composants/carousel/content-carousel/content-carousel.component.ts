import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-carousel',
  templateUrl: './content-carousel.component.html',
  styleUrls: ['./content-carousel.component.css']
})

export class ContentCarouselComponent implements OnInit {
  @Input() titre: any;
  @Input() sous_titre: any;
  txtBtn: any;
  left_text_bouton: string;
  right_text_bouton: string;
  @Input() imageUrl: string[];

  constructor() { }

  ngOnInit() {
    this.left_text_bouton = 'CUSTOM ORDER';
    this.right_text_bouton = 'EXISTING INVENTORY';
    this.titre = 'Model S';
    this.sous_titre = 'Get it whatever!';
  }
}
// energy(this.tt='something') > carousel(@titre) => [titre]="tt"
// carousel(this.IU='something') > content carousel(@imageUrl) => [imageUrl]="IU"
