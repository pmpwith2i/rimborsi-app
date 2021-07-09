import {Component, OnInit} from '@angular/core';
import {CstCol} from '../../shared/cst-table/classes/cst-col';
import {CstFilter} from '../../shared/cst-table/classes/cst-filter';
import {Router} from '@angular/router';
import {filterItem} from '../../shared/cst-table/classes/filter-item';
import {getRichiesteColumns, getRichiesteFilters} from '../../config/constants';
import {RichiesteService} from '../../core/services/richieste.service';
import {Richiesta} from '../../shared/model/richiesta';

@Component({
  selector: 'app-richieste',
  templateUrl: './richieste.component.html',
  styleUrls: ['./richieste.component.css']
})
export class RichiesteComponent implements OnInit {
  dataSourceColumns: CstCol[] = getRichiesteColumns();
  dataSourceFilters: CstFilter[] = getRichiesteFilters();
  datasourceSearch: string;
  dataSource: Richiesta[] = [];
  overlayShow = false;
  viewResume = false;

  constructor(private router: Router, private richiesteService: RichiesteService) {
  }

  ngOnInit(): void {
    this.createSidebarLink();
    this.getRichieste(null, null);
  }

  createSidebarLink(): void {

  }

  openRichiestaDetail(): void {
    this.router.navigate(['richieste', {id: 1}]);
  }

  private getRichieste(filterList: CstFilter[], searchStr: string): void {
    this.richiesteService.getAllRichieste().subscribe(data => {
      this.dataSource = [];
      data.forEach(el => {
        const item = new Richiesta(el);
        const find = filterItem(filterList, searchStr, item);
        if (find) {
          this.dataSource.push(item);
        }
      });
      this.richiesteService.setRichiesteCache(data);
    });
  }


  filterEvent(searchNewval: string): void {
    this.datasourceSearch = searchNewval;
    this.getRichieste(this.dataSourceFilters, this.datasourceSearch);
  }

  showItem(anId: number): void {
    this.toggleViewResume();
  }

  editItem(anId: number): void {
    this.router.navigate(['rimborsi/richieste/', anId]);
  }

  toggleViewResume(): void {
    this.viewResume = !this.viewResume;
    if (this.viewResume) {
      this.overlayShow = true;
    } else {
      this.overlayShow = false;
    }
  }
}
