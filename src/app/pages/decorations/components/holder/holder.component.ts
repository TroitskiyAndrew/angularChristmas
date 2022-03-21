import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/data/data.service';
import data from '../../../../../data/toysData.json';
import { DataArr } from '../../../../../data/dataTypes';

@Component({
  selector: 'app-holder',
  templateUrl: './holder.component.html',
  styleUrls: ['./holder.component.scss']
})
export class HolderComponent implements OnInit {

  public data: DataArr = data;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {

  }

}
