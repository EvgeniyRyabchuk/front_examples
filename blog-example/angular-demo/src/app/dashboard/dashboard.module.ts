import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";



@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
  ]
})
export class DashboardModule { }
