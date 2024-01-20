import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatboxComponent } from './chatbox.component';



@NgModule({
  declarations: [ChatboxComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ChatboxComponent
  ]
})
export class ChatboxModule { }
