import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() titre: any;
  @Input() sous_titre: any;
  txtBtn: any;
  left_text_bouton: string;
  right_text_bouton: string;
  IU: string[];
  firstCrslImg: string;
  secondCrslImg: string;
  thirdCrslImg: string;
  constructor() { }

  ngOnInit() {
    this.IU = ['../assets/img/optimiserbenit.png', '../assets/img/benit.jpg', '../assets/img/JL_benit_2.jpg'];
    this.firstCrslImg = this.IU[0];
    this.secondCrslImg = this.IU[1];
    this.thirdCrslImg = this.IU[2];
    this.left_text_bouton = 'CUSTOM ORDER';
    this.right_text_bouton = 'EXISTING INVENTORY';

  }

}
// carousel(this.IU='something') > content carousel(@imageUrl) => [imageUrl]="IU"
// energy(this.tt='something') > carousel(@titre) => [titre]="tt"

