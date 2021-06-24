import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichiesteComponent } from './richieste.component';
import {RichiesteRoutingModule} from './richieste-routing.module';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [RichiesteComponent],
  imports: [
    CommonModule,
    RichiesteRoutingModule,
    SharedModule
  ]
})
export class RichiesteModule { }
