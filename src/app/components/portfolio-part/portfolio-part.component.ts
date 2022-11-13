import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-part',
  templateUrl: './portfolio-part.component.html',
  styleUrls: ['./portfolio-part.component.scss']
})
export class PortfolioPartComponent implements OnInit {

  @Input() title: string;
  @Input() pics: string[];
  separate: number;
  columnsLen: number[];

  constructor() { 
    this.title = '';
    this.pics = [];
    this.separate = 0;
    this.columnsLen = [0, 0, 0];
  }

  ngOnInit(): void {
    this.separate = Math.floor(this.pics.length / 3);

    let residue = this.pics.length % 3;
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
}
