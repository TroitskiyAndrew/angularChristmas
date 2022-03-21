import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() public value: string = '';
  @Output() public valueChange: EventEmitter<string> = new EventEmitter();


  constructor() { }


  ngOnInit(): void {
  }

}
