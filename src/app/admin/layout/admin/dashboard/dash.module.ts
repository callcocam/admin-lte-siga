import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SideLeftComponent } from './side-left/side-left.component';
import { SideRightComponent } from './side-right/side-right.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../../../share.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,RouterModule ,SharedModule.forRoot()
  ],
  declarations: [HeaderComponent, ContentComponent, SideLeftComponent, SideRightComponent,FooterComponent],
  exports: [HeaderComponent, ContentComponent, SideLeftComponent, SideRightComponent,FooterComponent]
})
export class DashModule { }
