import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogInsertCodeComponent, RichiesteComponent} from './richieste.component';
import {RichiesteRoutingModule} from './richieste-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [RichiesteComponent, DialogInsertCodeComponent],
  imports: [
    CommonModule,
    RichiesteRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class RichiesteModule { }
