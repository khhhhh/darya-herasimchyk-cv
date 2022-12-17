import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { pictureList, createLink, picture } from '../../core/helpers/imageHelper';
import { MaterialPopupComponent } from '../material-popup/material-popup.component';

@Component({
  selector: 'app-portfolio-part',
  templateUrl: './portfolio-part.component.html',
  styleUrls: ['./portfolio-part.component.scss'],
  providers: [MatDialog]
})
export class PortfolioPartComponent implements OnInit {

  @Input() title: string;
  @Input() pics: pictureList;
  separate: number;
  columnsLen: number[];
  createLink = createLink;
  
  constructor(public dialog: MatDialog) { 
    this.title = '';
    this.separate = 0;
    this.pics = {elements: [], folderName: ""};
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

  openDialog(path: picture, folderName: string) : void {
    this.dialog.open(MaterialPopupComponent, {panelClass: 'material-popup', data: {pic: path, folderName: folderName, }});
  }

  range(len: number, startPos: number = 0) {
    return [...Array(len).keys()].map(i => i + startPos);
  }
}
