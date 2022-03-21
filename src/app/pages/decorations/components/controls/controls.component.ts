import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/data/data.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  public search2: string = 'test';

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
  }

  handleSearch(value: string): void {
    this.dataService.searh(value);
  }

  goHome(): void {
    this.router.navigate(['home'])
  }
}
