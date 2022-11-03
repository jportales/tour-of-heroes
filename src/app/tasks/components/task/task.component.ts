import { Component, Input, OnInit } from '@angular/core';
import { toDosRanges } from '../../constant/toDos.constants';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() id: number | undefined;
  @Input() userId: number | undefined;  
  @Input() title: string | undefined;
  @Input() completed: boolean | undefined;
  toDosRanges = toDosRanges ;

  constructor() { }

  ngOnInit(): void {
  }
}