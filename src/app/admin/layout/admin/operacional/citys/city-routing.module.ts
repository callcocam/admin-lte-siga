import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CitysComponent } from "./citys.component";
import { CityEditComponent } from './city-edit/city-edit.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: CitysComponent
      },
      {
        path: ":id/edit",
        component: CityEditComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class CityRoutingModule {}
