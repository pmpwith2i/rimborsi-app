import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserInfoComponent} from './user-info.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserInfoRoutingModule} from './user-info-routing.module';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [UserInfoComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UserInfoRoutingModule,
        SharedModule
    ]
})
export class UserInfoModule {
}
