import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-rimborsi',
  templateUrl: './rimborsi.component.html',
  styleUrls: ['./rimborsi.component.css']
})
export class RimborsiComponent implements OnInit {
  navbarOpen = false;

  myInnerHeight = window.innerHeight;

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
    this.navbarOpen = !this.navbarOpen;
  }

}
