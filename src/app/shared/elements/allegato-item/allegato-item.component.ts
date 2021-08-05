import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-allegato-item',
  templateUrl: './allegato-item.component.html',
  styleUrls: ['./allegato-item.component.css']
})
export class AllegatoItemComponent implements OnInit {

  @Input()
  allegatoLink: string;
  @Input()
  allegatoName: string;
  @Input()
  uploadDate: Date = new Date();
  @Input()
  allegatoType: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  upload(fileList: FileList): void {
    console.log(fileList);
    if (null == fileList[0]) {
      return;
    }
    this.allegatoName = fileList[0].name;
    this.uploadDate = new Date();
    this.allegatoLink = fileList[0].name;
  }
}


@Component({
  selector: 'app-allegato-generico-dialog',
  templateUrl: 'allegato-generico-dialog.html',
})
export class DialogAllegatoGenericoComponent {
  tipoAllegato: string = '';

  constructor(
    public dialogRef: MatDialogRef<DialogAllegatoGenericoComponent>) {
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.dialogRef.close();
  }
}

