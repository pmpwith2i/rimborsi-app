import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() inClass: String;
  @Input() iconName: String;
  @Input() isCliccable: boolean;
  @Input() isOutlined: boolean;
  constructor() {
  }

  ngOnInit(): void {
  }
}
