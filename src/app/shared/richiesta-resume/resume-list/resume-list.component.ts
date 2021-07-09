import {Component, Input, OnInit} from '@angular/core';
import {ResumeItemElement} from '../resume-list-item/element';

@Component({
  selector: 'app-resume-list',
  templateUrl: './resume-list.component.html',
  styleUrls: ['./resume-list.component.css']
})
export class ResumeListComponent implements OnInit {

  @Input()
  listElement: ResumeItemElement[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
