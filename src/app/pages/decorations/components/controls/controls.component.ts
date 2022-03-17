import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleSearch(value: string): void {
    console.log(value);
  }

  goHome(): void {
    this.router.navigate(['home'])
  }
}
