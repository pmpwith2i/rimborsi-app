import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Output() eventMenuClicked = new EventEmitter<any>();

  @Input()
  isNavbarOpen: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleNavbar(): void{
    this.eventMenuClicked.emit(true);
  }
}
