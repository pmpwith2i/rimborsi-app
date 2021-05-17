import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserInfoComponent} from './user-info.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserInfoRoutingModule} from './user-info-routing.module';


@NgModule({
  declarations: [UserInfoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserInfoRoutingModule
  ]
})
export class UserInfoModule {
}
