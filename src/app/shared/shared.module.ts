import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconComponent} from './elements/icon/icon.component';
import {MatIconModule} from '@angular/material/icon';
import {CalendarComponent} from './elements/calendar/calendar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CstTableComponent} from './elements/cst-table/cst-table.component';
import {CstButtonComponent} from './elements/cst-button/cst-button.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {CstFilterComponent} from './elements/cst-filter/cst-filter.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {CstCardDataTableComponent} from './elements/cst-card-data-table/cst-card-data-table.component';
import {CstFilterSectionComponent} from './elements/cst-filter-section/cst-filter-section.component';
import {HistoryListComponent} from './elements/history-list/history-list.component';
import {AllegatoItemComponent, DialogAllegatoGenericoComponent} from './elements/allegato-item/allegato-item.component';
import {DragAndDropUploadDirective} from './elements/allegato-item/drag-and-drop-upload.directive';
import {GiornateListComponent} from './elements/giornate-list/giornate-list.component';
import {GiornataItemComponent} from './elements/giornata-item/giornata-item.component';
import {CstPanelCardComponent} from './elements/cst-panel-card/cst-panel-card.component';
import {RichiestaResumeComponent} from './elements/richiesta-resume/richiesta-resume.component';
import {PanelRightComponent} from './elements/panel-right/panel-right.component';
import {ResumeListItemComponent} from './elements/richiesta-resume/resume-list-item/resume-list-item.component';
import {ResumeListComponent} from './elements/richiesta-resume/resume-list/resume-list.component';
import {IbanPanelComponent} from './elements/iban-panel/iban-panel.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import {SidebarComponent} from './elements/sidebar/sidebar.component';
import {SidebarItemComponent} from './elements/sidebar/sidebar-item/sidebar-item.component';
import {RouterModule} from '@angular/router';
import {DashContainerComponent} from './elements/dash-container/dash-container.component';
import {NavigationComponent} from './elements/navigation/navigation.component';
import {RetribuzioneListComponent} from './elements/retribuzione-list/retribuzione-list.component';
import {ContributiListComponent} from './elements/contributi-list/contributi-list.component';
import {TotaleListComponent} from './elements/totale-list/totale-list.component';
import {BackgroundStatoDirective} from './directives/background-stato.directive';
import {TipoPagamentoPipe} from './pipes/tipo-pagamento-pipe';
import {DinamycDataPipe} from './pipes/dinamyc-data-pipe';
import {NotificationPanelComponent} from './notification-panel/notification-panel.component';
import {ModalGiornateComponent} from './elements/modal-giornate/modal-giornate.component';
import {DialogTextAreaComponent} from './elements/dialog-text-area/dialog-text-area.component';


@NgModule({
  declarations: [DialogTextAreaComponent, DialogAllegatoGenericoComponent, TipoPagamentoPipe, DinamycDataPipe, BackgroundStatoDirective, RetribuzioneListComponent, DashContainerComponent, NavigationComponent, SidebarComponent, SidebarItemComponent, CstCardDataTableComponent, IconComponent, CalendarComponent, CstTableComponent, CstButtonComponent, CstFilterComponent, CstCardDataTableComponent, CstFilterSectionComponent, HistoryListComponent, AllegatoItemComponent, DragAndDropUploadDirective, GiornateListComponent, GiornataItemComponent, CstPanelCardComponent, RichiestaResumeComponent, PanelRightComponent, ResumeListItemComponent, ResumeListComponent, IbanPanelComponent, SidebarComponent, SidebarItemComponent, DashContainerComponent, NavigationComponent, RetribuzioneListComponent, ContributiListComponent, TotaleListComponent, NotificationPanelComponent, ModalGiornateComponent, DialogTextAreaComponent],
  exports: [
    NotificationPanelComponent,
    IconComponent,
    CalendarComponent,
    CstTableComponent,
    CstButtonComponent,
    CstFilterSectionComponent,
    CstCardDataTableComponent,
    HistoryListComponent,
    AllegatoItemComponent,
    GiornateListComponent,
    CstCardDataTableComponent,
    CstPanelCardComponent,
    RichiestaResumeComponent,
    PanelRightComponent,
    RichiestaResumeComponent,
    IbanPanelComponent,
    SidebarComponent,
    DashContainerComponent,
    RetribuzioneListComponent,
    ContributiListComponent,
    TotaleListComponent,
    BackgroundStatoDirective,
    DinamycDataPipe,
    TipoPagamentoPipe
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
    MatCheckboxModule,
    MatTooltipModule,
    RouterModule,
  ],
  providers: [MatDatepickerModule]
})
export class SharedModule {
}
