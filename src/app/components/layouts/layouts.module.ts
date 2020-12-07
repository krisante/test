import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavBarComponent } from './main-layout/nav-bar/nav-bar.component';
import { FooterComponent } from './main-layout/footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MainLayoutComponent, NavBarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [MainLayoutComponent]
})
export class LayoutsModule { }
