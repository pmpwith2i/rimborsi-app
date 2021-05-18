import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cst-button',
  templateUrl: './cst-button.component.html',
  styleUrls: ['./cst-button.component.css']
})
export class CstButtonComponent implements OnInit {
  @Output() actionConfirmEvent = new EventEmitter<any>();

  @Input() text: string;
  @Input() iconName: string;
  @Input() btnClass: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  confirmBtn(): void {
    this.actionConfirmEvent.next(true);
  }
}
