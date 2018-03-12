import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CitysComponent } from "./citys.component";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardRouterService } from "../../../auth/services/auth-guard-router.service";
import { SharedModule } from '../../../../share.module';
import { CityRoutingModule } from "./city-routing.module";
import { ResourcesService } from "../../../../services/resources.service";
import { DefaultRequestOptionsService } from '../../../../services/default-request-options.service';
import { CityEditComponent } from './city-edit/city-edit.component';

@NgModule({
  imports: [CommonModule, CityRoutingModule,SharedModule.forRoot()],
  declarations: [CitysComponent, CityEditComponent],
  exports: [RouterModule,CitysComponent, CityEditComponent],
  providers:[]
})
export class CityModule {}
