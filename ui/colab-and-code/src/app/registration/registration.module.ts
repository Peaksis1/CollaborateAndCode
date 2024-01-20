import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { FormsModule } from '@angular/forms';
import { RegistrationRoutingModule } from './registration-routing.module';


@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
