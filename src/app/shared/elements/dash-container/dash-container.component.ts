import {Component, Input, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {SidebarRoute} from '../../model/route';

@Component({
  selector: 'app-dash-container',
  templateUrl: './dash-container.component.html',
  styleUrls: ['./dash-container.component.css']
})
export class DashContainerComponent implements OnInit {

  navbarOpen = false;
  myInnerHeight = window.innerHeight;
  @Input()
  title: string = 'Rimborsi Volontariato';
  @Input()
  sidebarRoutes: SidebarRoute[] = [];

  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      '(max-width: 1600px)'
    ]).subscribe(result => {
      console.log(result);
      if (result.matches) {
        this.navbarOpen = false;
      } else {
        this.navbarOpen = true;
      }
    });
  }

  ngOnInit(): void {
    const isSmallScreen = this.breakpointObserver.isMatched('(max-width: 1600px)');
    if (!isSmallScreen) {
      this.navbarOpen = true;
    }
  }

  toggleNavBar(): void {
    const isSmallScreen = this.breakpointObserver.isMatched('(max-width: 1600px)');
    if (!isSmallScreen) {
      return;
    }
    console.log('TOGGLE NAVBAR');
    this.navbarOpen = !this.navbarOpen;
  }

}
