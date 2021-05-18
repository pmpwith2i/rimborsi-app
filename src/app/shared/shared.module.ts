import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconComponent} from './icon/icon.component';
import {MatIconModule} from '@angular/material/icon';
import {CalendarComponent} from './calendar/calendar.component';
import {EditDelegaComponent} from './edit-delega/edit-delega.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CstTableComponent} from './cst-table/cst-table.component';
import {CstButtonComponent} from './cst-button/cst-button.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {CstFilterComponent} from './cst-filter/cst-filter.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { CstCardDataTableComponent } from './cst-card-data-table/cst-card-data-table.component';


@NgModule({
  declarations: [IconComponent, CalendarComponent, EditDelegaComponent, CstTableComponent, CstButtonComponent, CstFilterComponent, CstCardDataTableComponent],
  exports: [
    IconComponent,
    CalendarComponent,
    EditDelegaComponent,
    CstTableComponent,
    CstButtonComponent
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
    MatInputModule
  ],
  providers: [MatDatepickerModule]
})
export class SharedModule {
}
