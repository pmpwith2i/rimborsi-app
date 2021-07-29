import {Component, Input, OnInit} from '@angular/core';
import {RetribuzioneItem} from '../../model/retribuzione-item';

@Component({
  selector: 'app-retribuzione-list',
  templateUrl: './retribuzione-list.component.html',
  styleUrls: ['./retribuzione-list.component.css']
})
export class RetribuzioneListComponent implements OnInit {
  @Input()
  retribuzioneItems: RetribuzioneItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
