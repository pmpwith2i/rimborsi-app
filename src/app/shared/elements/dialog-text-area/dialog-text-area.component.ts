import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-text-area',
  templateUrl: './dialog-text-area.component.html',
  styleUrls: ['./dialog-text-area.component.css']
})
export class DialogTextAreaComponent implements OnInit {
  text: string;

  constructor(
    public dialogRef: MatDialogRef<DialogTextAreaComponent>) {
  }

  onClose(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  ngOnInit(): void {
  }
}
