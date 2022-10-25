import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  @Input() 
  text?: string;

  @Output() 
  textChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeText(text: string){
    this.textChange.emit(text);
  }

}
