import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-rimborsi',
  templateUrl: './rimborsi.component.html',
  styleUrls: ['./rimborsi.component.css']
})
export class RimborsiComponent implements OnInit {
  navbarOpen = true;

  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
    ]).subscribe(result => {
      if (result.matches) {
        this.navbarOpen = false;
      } else {
        this.navbarOpen = true;
      }
    });
  }

  ngOnInit(): void {
  }

  toggleNavBar(): void {
    const isSmallScreen = this.breakpointObserver.isMatched('(max-width: 1200px)');
    if (!isSmallScreen) {
      return;
    }
    this.navbarOpen = !this.navbarOpen;
  }

}
