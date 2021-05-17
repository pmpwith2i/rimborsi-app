import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-delega-detail',
  templateUrl: './delega-detail.component.html',
  styleUrls: ['./delega-detail.component.css']
})
export class DelegaDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
