import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecorationsComponent } from './decorations.component';
import { ControlsComponent } from './components/controls/controls.component';
import { HolderComponent } from './components/holder/holder.component';
import { ToyCardComponent } from './components/toy-card/toy-card.component';
import { InputNameComponent } from './components/controls/input-name/input-name.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DecorationsComponent, ControlsComponent, HolderComponent, ToyCardComponent, InputNameComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DecorationsModule { }
