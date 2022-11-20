import { Component, Input, OnInit } from '@angular/core';
import { pictureList } from '../dtos/picObj';

@Component({
  selector: 'app-portfolio-part',
  templateUrl: './portfolio-part.component.html',
  styleUrls: ['./portfolio-part.component.scss']
})
export class PortfolioPartComponent implements OnInit {

  @Input() title: string;
  @Input() pics: pictureList;
  separate: number;
  columnsLen: number[];

  constructor() { 
    this.title = '';
    this.separate = 0;
    this.pics = {};
    this.columnsLen = [0, 0, 0];
  }

  ngOnInit(): void {
    this.separate = Math.floor(this.pics.elements!.length / 3);

    let residue = this.pics.elements!.length % 3;
    this.columnsLen = this.columnsLen.map(x => x + this.separate);
    if(residue == 1)
      this.columnsLen[1]++;
    else if (residue == 2)
    {
      this.columnsLen[0]++;
      this.columnsLen[2]++;
    }

  }

  range(len: number, startPos: number = 0) {
    return [...Array(len).keys()].map(i => i + startPos);
  }

  createLink = (num: number): string =>  
    `https://ik.imagekit.io/me9sfvskr/${this.pics.folderName}/${num}-min.jpg?` + 
    `ik-sdk-version=javascript-1.4.3&tr=w-${this.pics.elements![num].width}%2Ch-${this.pics.elements![num].height}%2Cfo-auto`;
}
