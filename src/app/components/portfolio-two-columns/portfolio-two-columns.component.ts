import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-two-columns',
  templateUrl: './portfolio-two-columns.component.html',
  styleUrls: ['./portfolio-two-columns.component.scss']
})
export class PortfolioTwoColumnsComponent implements OnInit {

  @Input() title: string;
  @Input() pics: string[];
  @Input() descs: string[];
  separate: number;

  constructor() 
  {
    this.title = '';
    this.pics = [];
    this.separate = 0;
    this.descs = [];
   }

  ngOnInit(): void {
    this.separate = this.pics.length / 2;
  }

  range() {
    return [...Array(this.separate).keys()].map(i => i);
  }

}
