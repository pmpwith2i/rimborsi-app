import {Component, Input, OnInit} from '@angular/core';
import {ContributoItem} from '../model/contributo-item';

@Component({
  selector: 'app-contributi-list',
  templateUrl: './contributi-list.component.html',
  styleUrls: ['./contributi-list.component.css']
})
export class ContributiListComponent implements OnInit {
  @Input()
  contributiItems: ContributoItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
