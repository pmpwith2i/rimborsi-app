import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Giornata} from '../../model/giornata';

@Component({
  selector: 'app-modal-giornate',
  templateUrl: './modal-giornate.component.html',
  styleUrls: ['./modal-giornate.component.css']
})
export class ModalGiornateComponent implements OnInit {

  @Input()
  giornate: Giornata[] = [];

  ngOnInit(): void {
    this.giornate = this.data.giornate;
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModalGiornateComponent>) {
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.dialogRef.close();
  }

}
