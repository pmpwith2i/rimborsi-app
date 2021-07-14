import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichiestaNewComponent } from './richiesta-new.component';
import {RichiestaNewRoutingModule} from './richiesta-new-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  declarations: [RichiestaNewComponent],
    imports: [
        CommonModule,
        RichiestaNewRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        MatCheckboxModule
    ]
})
export class RichiestaNewModule { }
