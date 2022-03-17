import { Component, Input, OnInit } from '@angular/core';
import { DataItem } from '../../../../../data/dataTypes'

@Component({
  selector: 'app-toy-card',
  templateUrl: './toy-card.component.html',
  styleUrls: ['./toy-card.component.scss'],

})
export class ToyCardComponent implements OnInit {

  @Input() public toy!: DataItem;

  public faivorite = false;

  public faivoriteBorder = 'red';

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleFaivorite(): void {
    this.faivorite = !this.faivorite;
  }

}
