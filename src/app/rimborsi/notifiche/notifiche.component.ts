import {Component, OnInit} from '@angular/core';
import {CstCol} from '../../shared/cst-table/classes/cst-col';
import {CstFilter} from '../../shared/cst-table/classes/cst-filter';
import {Router} from '@angular/router';
import {filterItem} from '../../shared/cst-table/classes/filter-item';
import {Notifica} from '../../shared/model/notifica';
import {NotificheService} from '../../core/services/notifiche.service';
import {getNotificheColumns, getNotificheFilters} from '../../config/constants';

@Component({
  selector: 'app-notifiche',
  templateUrl: './notifiche.component.html',
  styleUrls: ['./notifiche.component.css']
})
export class NotificheComponent implements OnInit {

  dataSourceColumns: CstCol[] = getNotificheColumns();
  dataSourceFilters: CstFilter[] = getNotificheFilters();
  datasourceSearch: string;
  dataSource: Notifica[] = [];

  constructor(private router: Router, private notificheService: NotificheService) {
  }

  ngOnInit(): void {
    this.createSidebarLink();
    this.getNotifiche(null, null);
  }

  createSidebarLink(): void {

  }

  openRichiestaDetail(): void {
    this.router.navigate(['notifiche', {id: 1}]);
  }

  private getNotifiche(filterList: CstFilter[], searchStr: string): void {
    this.notificheService.getAllNotifiche().subscribe(data => {
      this.dataSource = [];
      data.forEach(el => {
        const item = new Notifica(el);
        const find = filterItem(filterList, searchStr, item);
        if (find) {
          this.dataSource.push(item);
        }
      });
      this.notificheService.setNotificheCache(data);
    });
  }


  filterEvent(searchNewval: string): void {
    this.datasourceSearch = searchNewval;
    this.getNotifiche(this.dataSourceFilters, this.datasourceSearch);
  }

  showItem(anId: number): void {
    this.router.navigate(['rimborsi/richieste/', anId]);
  }
}
