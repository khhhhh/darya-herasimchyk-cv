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

  constructor() { 
    this.title = '';
    this.pics = [];
    this.separate = 0;
  }

  ngOnInit(): void {
    this.separate = this.pics.length / 3;
  }

  range(startPos: number) {
    return [...Array(this.separate).keys()].map(i => i + startPos);
  }
}
