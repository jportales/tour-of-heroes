import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    TableModule,
    ButtonModule,
    MessagesModule,
    MessageModule
  ],
  exports:[
    FormsModule,
    DialogModule,
    TableModule,
    ButtonModule,
    MessagesModule,
    MessageModule
  ]
})
export class SharedModule { }
