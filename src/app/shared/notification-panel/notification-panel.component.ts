import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-notification-panel',
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.css']
})
export class NotificationPanelComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  text: string;


  constructor() {
  }

  ngOnInit(): void {
  }

}

export enum NotificationTypes {
  SUCCESS,
  ERROR,
  WARNING,
  INFO
}
