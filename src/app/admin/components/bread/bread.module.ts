import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { BreadService } from './bread.service';
import { BreadComponent } from './bread.component';

export function breadcrumbServiceFactory(router: Router) {
    return new BreadService(router);
}

@NgModule({
    imports: [CommonModule, RouterModule],
    providers: [
        { provide: BreadService, useFactory: breadcrumbServiceFactory, deps: [Router] }
    ],
    declarations: [BreadComponent],
    exports: [BreadComponent]
})
export class BreadModule { }