import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashModule } from './dashboard/dash.module';
import { AdminComponent } from './admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { FlashMessagesComponent } from '../../components/flash-messages/flash-messages.component';
import { FlashMessagesService } from '../../components/flash-messages/flash-messages.service';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { BreadModule } from '../../components/bread/bread.module';

@NgModule({
  imports: [
    CommonModule,
    DashModule,
    AdminRoutingModule,
    RouterModule,
    BreadModule
  ],
  exports:[
    FlashMessagesComponent,
    BreadcrumbComponent
  ],
  declarations: [AdminComponent, NotFoundComponent, FlashMessagesComponent,
    BreadcrumbComponent],
  providers:[FlashMessagesService]
})
export class AdminModule { }
