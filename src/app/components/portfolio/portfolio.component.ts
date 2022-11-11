import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  posters: string[];
  compositions: string[];

  constructor() { 
    this.posters = [];
    this.compositions = [];
  }

  ngOnInit(): void {
    this.posters = [...Array(15).keys()].map(i => `assets/images/posters/${i}-min.jpg`);
    this.compositions = [...Array(6).keys()].map(i => `assets/images/compositions/${i}-min.jpg`);
  }

}
