import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconComponent} from './icon/icon.component';
import {MatIconModule} from '@angular/material/icon';
import {CalendarComponent} from './calendar/calendar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CstTableComponent} from './cst-table/cst-table.component';
import {CstButtonComponent} from './cst-button/cst-button.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {CstFilterComponent} from './cst-filter/cst-filter.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {CstCardDataTableComponent} from './cst-card-data-table/cst-card-data-table.component';
import {CstFilterSectionComponent} from './cst-filter-section/cst-filter-section.component';
import {HistoryListComponent} from './history-list/history-list.component';
import {AllegatoItemComponent} from './allegato-item/allegato-item.component';
import {DragAndDropUploadDirective} from './allegato-item/drag-and-drop-upload.directive';
import {GiornateListComponent} from './giornate-list/giornate-list.component';
import { GiornataItemComponent } from './giornata-item/giornata-item.component';


@NgModule({
  declarations: [CstCardDataTableComponent, IconComponent, CalendarComponent, CstTableComponent, CstButtonComponent, CstFilterComponent, CstCardDataTableComponent, CstFilterSectionComponent, HistoryListComponent, AllegatoItemComponent, DragAndDropUploadDirective, GiornateListComponent, GiornataItemComponent],
  exports: [
    IconComponent,
    CalendarComponent,
    CstTableComponent,
    CstButtonComponent,
    CstFilterSectionComponent,
    CstCardDataTableComponent,
    HistoryListComponent,
    AllegatoItemComponent,
    GiornateListComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  providers: [MatDatepickerModule]
})
export class SharedModule {
}
