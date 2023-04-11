import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignInComponent
  ],
  exports: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    SignInRoutingModule,
    ReactiveFormsModule
  ]
})
export class SignInModule { }
