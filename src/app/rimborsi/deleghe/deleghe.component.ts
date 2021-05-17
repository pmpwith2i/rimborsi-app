import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deleghe',
  templateUrl: './deleghe.component.html',
  styleUrls: ['./deleghe.component.css']
})
export class DelegheComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  openDelegaDetail(): void {
    this.router.navigate(['delega', {id: 1}]);
  }
}
