import { Component, OnInit } from '@angular/core';
import { ToDosService } from 'src/app/shared/services/to-dos.service';
import { toDosRanges } from '../../constant/toDos.constants';

import { toDos } from '../../models/toDos.model';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos-page.component.html',
  styleUrls: ['./to-dos-page.component.scss']
})

export class ToDosComponent implements OnInit {

  toDos: toDos[] = [];
  toDosRanges = toDosRanges;

  constructor(private toDosService: ToDosService) { }

  ngOnInit(): void {
    this.getTodosPromiseAsync();
  }

async getTodosPromiseAsync(): Promise<void> {
        this.toDos = await this.toDosService.getToDosPromiseAsync();
      }
}