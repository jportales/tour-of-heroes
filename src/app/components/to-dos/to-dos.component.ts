import { Component, OnInit } from '@angular/core';

import { toDos } from '../../models/toDos.model';
import { ToDosService } from '../../services/to-dos.service';
import { toDosRanges } from '../../constants/toDos.constants';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.scss']
})
export class ToDosComponent implements OnInit {

  toDos: toDos[] = [];
  toDosRanges = toDosRanges;

  constructor(private toDosService: ToDosService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos():void {
    this.toDosService.getTodos().subscribe(data => this.toDos = data);
   }


}
