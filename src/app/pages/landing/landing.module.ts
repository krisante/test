import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  }
]



@NgModule({
  declarations: [LandingComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class LandingModule { }
