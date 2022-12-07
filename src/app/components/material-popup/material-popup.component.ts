import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { picture, createLink } from '../../core/helpers/imageHelper';

@Component({
  selector: 'app-material-popup',
  templateUrl: './material-popup.component.html',
  styleUrls: ['./material-popup.component.scss']
})
export class MaterialPopupComponent implements OnInit {

  createLink = createLink;
  constructor(public dialogRef: MatDialogRef<MaterialPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData ) {
   }

  isLoaded: boolean = false;

  ngOnInit(): void {
  }

  onPicLoad() {

    this.isLoaded = true;

  }

  onClose() {
    this.dialogRef.close();
  }

}

export interface DialogData {
  pic: picture;
  folderName: string;
}