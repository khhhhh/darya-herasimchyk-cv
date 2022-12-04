import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { pictureList } from '../dtos/picObj';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  postersWH: pictureList;
  compositionsWH: pictureList;
  logosWH: pictureList;
  fontsWH: pictureList;
  tradartWH: pictureList;

  //describe strings
  logoDescs: string[];
  fontsDescs: string[];

  constructor() { 
    this.logoDescs = [];
    this.fontsDescs = [];

    this.postersWH = {};
    this.compositionsWH = {};
    this.logosWH = {};
    this.fontsWH = {};
    this.tradartWH = {};

    this.createPosters();
    this.createCompositions();
    this.createLogos();
    this.createFonts();
    this.createTradArt();
  }

  ngOnInit(): void {

    this.logoDescs = ['Identity manual for «Cargo»', 'Identity manual for «Petbox»'];
    this.fontsDescs = ['Kekoolich', 'Neon Excellence Regular', 'Neon Excellence Bold'];
  }

  createPosters() {
    this.postersWH.folderName = 'posters';
    this.postersWH.elements = [
      { name: '0', width: 842, height: 1191 },
      { name:'1', width:842, height:1191 },
      { name:'2', width:842, height:1191 },
      { name:'3', width:842, height:1191 },
      { name:'4', width:842, height:1191 },
      { name:'5', width:877, height:620 },
      { name:'6', width:842, height:1191 },
      { name:'7', width:842, height:1191 },
      { name:'8', width:842, height:1191 },
      { name:'9', width:522, height:738 },
      { name:'10', width:842, height:1191 },
      { name:'11', width:842, height:1191 },
      { name:'12', width:671, height:958 },
      { name:'13', width:842, height:1191 },
      { name:'14', width:842, height:1191 },
    ];
  }

  createCompositions() {
    this.compositionsWH.folderName = 'compositions';
    this.compositionsWH.elements = [
      { name: '0', width: 620, height: 877 },
      { name: '1', width: 620, height: 877 },
      { name: '2', width: 620, height: 877 },
      { name: '3', width: 620, height: 877 },
      { name: '4', width: 620, height: 877 },
      { name: '5', width: 877, height: 1240 },
    ];
  }

  createLogos() {
    this.logosWH.folderName = 'logos';
    this.logosWH.elements = [
      { name: '0', width: 975, height: 966},
      { name: '1', width: 2000, height: 1408 },
      { name: '2', width: 1217, height: 968 },
      { name: '3', width: 2000, height: 1384 },
    ];
  }

  createFonts() {
    this.fontsWH.folderName = 'fonts';
    this.fontsWH.elements = [
      { name: '0', width: 984, height: 428},
      { name: '1', width: 1539, height: 615 },
      { name: '2', width: 520, height: 191 },
      { name: '3', width: 1523, height: 537 },
      { name: '4', width: 1197, height: 339 },
      { name: '5', width: 1782, height: 534 },
    ]
  }

  createTradArt() {
    this.tradartWH.folderName = 'tradart';
    this.tradartWH.elements = [
      { name: '0', width: 1240, height: 877},
      { name: '1', width: 1093, height: 1465 },
      { name: '2', width: 1310, height: 1886 },
      { name: '3', width: 1476, height: 1122 },
      { name: '4', width: 877, height: 1240 },
    ]
  }
}
