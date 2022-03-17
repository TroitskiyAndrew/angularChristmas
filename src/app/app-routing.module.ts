import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecorationsComponent } from './pages/decorations/decorations.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'decorations',
    component: DecorationsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

// ToDo-0 laisy loading - почитать

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
