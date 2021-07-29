import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-panel-right',
  templateUrl: './panel-right.component.html',
  styleUrls: ['./panel-right.component.css']
})
export class PanelRightComponent implements OnInit {
  @Input()
  panelTitle: string;

  @Output()
  closeEvent = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClose(): void {
    this.closeEvent.emit();
  }
}
