import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CitysComponent } from "./citys.component";
import { CityEditComponent } from './city-edit/city-edit.component';
import { CityCreateComponent } from './city-create/city-create.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: CitysComponent,
        data: { breadcrumb: 'Cidades'}
      },
      {
        path: ":id/edit",
        component: CityEditComponent,
        data: { breadcrumb: 'Editar'}
      },
      {
        path: "cadastro",
        component: CityCreateComponent,
        data: { breadcrumb: 'Cadastrar'}
      }
    ])
  ],
  exports: [RouterModule]
})
export class CityRoutingModule {}
