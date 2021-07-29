import {Component, Input, OnInit} from '@angular/core';
import {ResumeItemElement} from './element';

@Component({
  selector: 'app-resume-list-item',
  templateUrl: './resume-list-item.component.html',
  styleUrls: ['./resume-list-item.component.css']
})
export class ResumeListItemComponent implements OnInit {

  @Input()
  element: ResumeItemElement;

  constructor() {
  }

  ngOnInit(): void {
  }

}
