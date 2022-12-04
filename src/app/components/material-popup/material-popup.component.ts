import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-material-popup',
  templateUrl: './material-popup.component.html'
})
export class MaterialPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MaterialPopupComponent>) { }

  ngOnInit(): void {
  }

}
