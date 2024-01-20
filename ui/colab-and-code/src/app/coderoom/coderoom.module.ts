import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoderoomComponent } from './coderoom.component';
import { ChatboxModule } from '../chatbox/chatbox.module';
import { CoderoomRoutingModule } from './coderoom-routing.module';



@NgModule({
  declarations: [CoderoomComponent],
  imports: [
    CommonModule,
    ChatboxModule,
    CoderoomRoutingModule
  ]
})
export class CoderoomModule { }
