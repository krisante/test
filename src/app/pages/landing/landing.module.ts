import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFilterPipe } from 'src/app/pipes/custom-filter.pipe';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  }
]
@NgModule({
  declarations: [LandingComponent, CustomFilterPipe],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgbTooltipModule,
    FormsModule
  ]
})
export class LandingModule { }
