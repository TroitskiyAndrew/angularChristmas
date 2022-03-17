import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.scss']
})
export class InputNameComponent implements OnInit {

  public value = '';

  @Output() public search: EventEmitter<string> = new EventEmitter();

  handleChange() {
    this.search.emit(this.value);
  }

  ngOnInit(): void {
  }

}
