import { Component, Input, OnInit } from '@angular/core';
import { pictureList, createLink } from '../../core/helpers/imageHelper';

@Component({
  selector: 'app-portfolio-two-columns',
  templateUrl: './portfolio-two-columns.component.html',
  styleUrls: ['./portfolio-two-columns.component.scss']
})
export class PortfolioTwoColumnsComponent implements OnInit {

  @Input() title: string;
  @Input() pics: pictureList;
  @Input() descs: string[];
  separate: number;

  constructor() 
  {
    this.title = '';
    this.pics = {elements: [], folderName: ""};
    this.separate = 0;
    this.descs = [];
   }

  ngOnInit(): void {
    this.separate = this.pics.elements!.length / 2;
  }

  range() {
    return [...Array(this.separate).keys()].map(i => i);
  }

  createLink = (num: number): string =>  
    `https://ik.imagekit.io/me9sfvskr/${this.pics.folderName}/${num}-min.jpg?` + 
    `ik-sdk-version=javascript-1.4.3&tr=w-${this.pics.elements![num].width}%2Ch-${this.pics.elements![num].height}%2Cfo-auto`;

}
