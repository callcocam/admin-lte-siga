import { Component, OnInit } from '@angular/core';
import { BreadService } from './bread.service';
import { Bread } from './bread';

@Component({
  selector: 'app-bread',
  templateUrl: './bread.component.html',
  styleUrls: ['./bread.component.css']
})
export class BreadComponent {
  breadcrumbs: Bread[];

  constructor(private breadcrumbService: BreadService) {
      breadcrumbService.breadcrumbChanged.subscribe((crumbs: Bread[]) => { this.onBreadcrumbChange(crumbs); });
  }

  private onBreadcrumbChange(crumbs: Bread[]) {
      this.breadcrumbs = crumbs;
  }
}
