import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Giornata} from '../../shared/model/giornata';
import {RichiesteService} from '../../core/services/richieste.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-richiesta-new',
  templateUrl: './richiesta-new.component.html',
  styleUrls: ['./richiesta-new.component.css']
})
export class RichiestaNewComponent implements OnInit {
  giornate: Giornata[];

  constructor(private router: Router, private formBuilder: FormBuilder, private richiesteService: RichiesteService) {
  }

  ngOnInit(): void {
    this.giornate = this.richiesteService.getGiornateDisponibili([]);
  }

  getCountSelectedDays(): number {
    return this.giornate.filter(el => el.selected).length;
  }

  sendRequest(): void {
    this.router.navigate(['rimborsi/richieste/', 1]);
  }
}
