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
import {GiornataItemComponent} from './giornata-item/giornata-item.component';
import {CstPanelCardComponent} from './cst-panel-card/cst-panel-card.component';
import {RichiestaResumeComponent} from './richiesta-resume/richiesta-resume.component';
import {PanelRightComponent} from './panel-right/panel-right.component';
import {ResumeListItemComponent} from './richiesta-resume/resume-list-item/resume-list-item.component';
import {ResumeListComponent} from './richiesta-resume/resume-list/resume-list.component';
import {IbanPanelComponent} from './iban-panel/iban-panel.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import {SidebarComponent} from './sidebar/sidebar.component';
import {SidebarItemComponent} from './sidebar/sidebar-item/sidebar-item.component';
import {RouterModule} from '@angular/router';
import {DashContainerComponent} from './dash-container/dash-container.component';
import {NavigationComponent} from './navigation/navigation.component';
import {RetribuzioneListComponent} from './retribuzione-list/retribuzione-list.component';
import { ContributiListComponent } from './contributi-list/contributi-list.component';
import { TotaleListComponent } from './totale-list/totale-list.component';


@NgModule({
  declarations: [RetribuzioneListComponent, DashContainerComponent, NavigationComponent, SidebarComponent, SidebarItemComponent, CstCardDataTableComponent, IconComponent, CalendarComponent, CstTableComponent, CstButtonComponent, CstFilterComponent, CstCardDataTableComponent, CstFilterSectionComponent, HistoryListComponent, AllegatoItemComponent, DragAndDropUploadDirective, GiornateListComponent, GiornataItemComponent, CstPanelCardComponent, RichiestaResumeComponent, PanelRightComponent, ResumeListItemComponent, ResumeListComponent, IbanPanelComponent, SidebarComponent, SidebarItemComponent, DashContainerComponent, NavigationComponent, RetribuzioneListComponent, ContributiListComponent, TotaleListComponent],
  exports: [
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
