import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-iban-panel',
  templateUrl: './iban-panel.component.html',
  styleUrls: ['./iban-panel.component.css']
})
export class IbanPanelComponent implements OnInit {
  @Input()
  panelName: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
