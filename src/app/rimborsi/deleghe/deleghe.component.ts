import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CstCol} from '../../shared/cst-table/classes/cst-col';
import {Delega} from '../../shared/model/delega';
import {DelegheService} from '../../core/services/deleghe.service';
import {CstFilter} from '../../shared/cst-table/classes/cst-filter';
import {filterItem} from '../../shared/cst-table/classes/filter-item';
import {getDelegheColumns, getDelegheFilters} from '../../config/constants';

@Component({
  selector: 'app-deleghe',
  templateUrl: './deleghe.component.html',
  styleUrls: ['./deleghe.component.css']
})
export class DelegheComponent implements OnInit {
  dataSourceColumns: CstCol[] = getDelegheColumns();
  dataSourceFilters: CstFilter[] = getDelegheFilters();
  datasourceSearch: string;
  dataSource: Delega[] = [];

  constructor(private router: Router, private delegheService: DelegheService) {
  }

  ngOnInit(): void {
    this.createSidebarLink();
    this.getDeleghe(null, null);
  }

  createSidebarLink(): void {

  }

  openDelegaDetail(): void {
    this.router.navigate(['delega', {id: 1}]);
  }

  private getDeleghe(filterList: CstFilter[], searchStr: string): void {
    this.delegheService.getAllDeleghe().subscribe(data => {
      this.dataSource = [];
      data.forEach(el => {
        const item = new Delega(el);
        const find = filterItem(filterList, searchStr, item);
        if (find) {
          this.dataSource.push(item);
        }
      });
      this.delegheService.setDelegheCache(data);
    });
  }


  filterEvent(searchNewval: string): void {
    this.datasourceSearch = searchNewval;
    this.getDeleghe(this.dataSourceFilters, this.datasourceSearch);
  }

  showItem(anId: number): void {
    this.router.navigate(['rimborsi/deleghe/edit', anId]);
  }
}
