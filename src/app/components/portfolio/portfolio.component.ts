import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  //pics paths
  posters: string[];
  compositions: string[];
  logos: string[];
  fonts: string[];
  tradart: string[];

  //describe strings
  logoDescs: string[];
  fontsDescs: string[];

  constructor() { 
    this.posters = [];
    this.compositions = [];
    this.logos = [];
    this.fonts = [];
    this.tradart = [];

    this.logoDescs = [];
    this.fontsDescs = [];
  }

  ngOnInit(): void {
    this.posters = [...Array(15).keys()].map(i => `https://ik.imagekit.io/me9sfvskr/posters/${i}-min.jpg`);
    this.compositions = [...Array(6).keys()].map(i => `https://ik.imagekit.io/me9sfvskr/compositions/${i}-min.jpg`);
    this.logos = [...Array(4).keys()].map(i => `https://ik.imagekit.io/me9sfvskr/logos/${i}.jpg`);
    this.fonts = [...Array(6).keys()].map(i => `https://ik.imagekit.io/me9sfvskr/fonts/${i}-min.jpg`);
    this.tradart = [...Array(5).keys()].map(i => `https://ik.imagekit.io/me9sfvskr/tradart/${i}-min.jpg`);

    this.logoDescs = ['Identity manual for «Cargo»', 'Identity manual for «Petbox»'];
    this.fontsDescs = ['Kekoolich', 'Neon Excellence Regular', 'Neon Excellence Bold'];
  }

}
