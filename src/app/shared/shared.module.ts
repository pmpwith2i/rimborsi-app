import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconComponent} from './icon/icon.component';
import {MatIconModule} from '@angular/material/icon';
import { CalendarComponent } from './calendar/calendar.component';
import { EditDelegaComponent } from './edit-delega/edit-delega.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [IconComponent, CalendarComponent, EditDelegaComponent],
  exports: [
    IconComponent,
    CalendarComponent,
    EditDelegaComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
