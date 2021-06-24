import {Component, Input, OnInit} from '@angular/core';

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
  uploadDate: Date;

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
    this.uploadDate = new Date()
    this.allegatoLink = fileList[0].name;
  }
}
