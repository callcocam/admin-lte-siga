import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashModule } from './dashboard/dash.module';
import { AdminComponent } from './admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    DashModule,
    AdminRoutingModule,
    RouterModule
  ],
  declarations: [AdminComponent, NotFoundComponent]
})
export class AdminModule { }
