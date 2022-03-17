import { Component, OnInit } from '@angular/core';
// ToDo-0 Почему-то не получается подтянуть из json
import data from '../../../../../data/data';
import { DataArr } from '../../../../../data/dataTypes';

@Component({
  selector: 'app-holder',
  templateUrl: './holder.component.html',
  styleUrls: ['./holder.component.scss']
})
export class HolderComponent implements OnInit {

  public data: DataArr = data;

  constructor() { }

  ngOnInit(): void {

  }

}
