import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../../services/shared.service';
import { SearchCriteria, ResourcesService } from '../../../../services/resources.service';

@Component({
  selector: 'app-citys',
  templateUrl: './citys.component.html',
  styleUrls: ['./citys.component.css']
})
export class CitysComponent implements OnInit {

  public loading: boolean;
  
  private searchCriteria: SearchCriteria = new SearchCriteria()
  constructor(
    private sharedService: SharedService,
    private resources: ResourcesService
  ) {}

  ngOnInit() {
    this.resources.path = "admin/cidades";
    this.resources.getCriteria(this.searchCriteria);
    this.getList();
  }

  getList() {
    this.resources
      .getList(this.searchCriteria)
      .subscribe(
        data => {
          Object.assign(this.resources.result, data.result);
          this.resources.column = data.result.paramsWrap.column
          this.sharedService.AdminLTE.init();
        },
        error => {
          console.log(error);
          this.searchCriteria.zfTablePage = 1;
        }
      );
  }

  updateState(item) {
    console.log(`Estou ${item}`);
  }

  delete() {
    console.log(this.searchCriteria);
  }

  onSorted($event) {
    this.searchCriteria = this.resources.getCriteria($event);
    this.getList();
  }

/**
   * Método responsável por paginar os dados.
   *
   * @param any $event Número da página atual.
   */
  paginar($event: any) {
    //TODO retornar dados a serem exibidos na tela
    this.searchCriteria.zfTablePage = $event;
    this.getList();
  }
  submeter(event) {
    Object.assign(this.searchCriteria, event)
    this.getList();
  }
  onChange(email: string, isChecked: boolean) {
    if (isChecked) {
      console.log(`Estou checado ${isChecked}`);
    } else {
      console.log(`Não Estou checado ${isChecked}`);
    }
  }
}
