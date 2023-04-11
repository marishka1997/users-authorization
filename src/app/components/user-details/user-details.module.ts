import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details.component';
import { UserDetailsRoutingModule } from './user-details-routing.module';



@NgModule({
  declarations: [
    UserDetailsComponent
  ],
  exports: [
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserDetailsRoutingModule
  ]
})
export class UserDetailsModule { }
