import { Component, OnInit } from "@angular/core";
import { SharedService } from "../../../../services/shared.service";
import {
  SearchCriteria,
  ResourcesService
} from "../../../../services/resources.service";
import { BreadService } from "../../../../components/bread/bread.service";
import { ActivatedRoute } from "@angular/router";
import { Result } from "../../../../services/result";
import { FlashMessagesService } from "../../../../components/flash-messages/flash-messages.service";
import { element } from "protractor";

@Component({
  selector: "app-citys",
  templateUrl: "./citys.component.html",
  styleUrls: ["./citys.component.css"]
})
export class CitysComponent implements OnInit {
  public loading: boolean;
  public idDelete = [];
  public mudule: "Cidades";
  confirmText: string = 'Sim <i class="glyphicon glyphicon-ok"></i>';
  cancelText: string = 'Não <i class="glyphicon glyphicon-remove"></i>';
  public searchCriteria: SearchCriteria = new SearchCriteria();
  constructor(
    public sharedService: SharedService,
    public resources: ResourcesService,
    private breadcrumbService: BreadService,
    private _flashMessagesService: FlashMessagesService
  ) {}

  ngOnInit() {
    this.idDelete = [];
    this.resources.path = "admin/cidades";
    this.resources.getCriteria(this.searchCriteria);
    this.getList();
  }

  getList() {
    this.resources.getList(this.searchCriteria).subscribe(
      data => {
        Object.assign(this.resources.result, data.result);
        this.resources.column = data.result.paramsWrap.column;
        $(document.getElementsByClassName('_all')).prop("checked", false);
        this.sharedService.AdminLTE.init();
      },
      error => {
        console.log(error);
        this.searchCriteria.zfTablePage = 1;
      }
    );
  }

  updateState(item) {
    this.resources.updateStatus(this.idDelete, { id: item }).subscribe(
      data => {
        let res = new Result();
        Object.assign(res, data);
        this._flashMessagesService.show(res.result.msg, {
          cssClass: `alert-${res.result.type}`,
          timeout: 5000
        });
        this.idDelete = [];
        this.getList();
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteList(item) {
    console.log(`Estou ${item}`);
  }

  delete(id) {
    this.resources.delete(id).subscribe(
      data => {
        let res = new Result();
        Object.assign(res, data);
        this._flashMessagesService.show(res.result.msg, {
          cssClass: `alert-${res.result.type}`,
          timeout: 5000
        });
        this.getList();
      },
      error => {
        console.log(error);
      }
    );
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
    Object.assign(this.searchCriteria, event);
    this.getList();
  }

  onChange(id: string, isChecked: boolean) {
    if (isChecked) {
      if (id == "all") {
        $(document.getElementsByClassName(id)).prop("checked", true);
        this.resources.result.sEcho.forEach(element => {
          this.idDelete.push(element.id);
        });
      } else {
        this.idDelete.push(id);
      }
    } else {
      if (id == "all") {
        $(document.getElementsByClassName(id)).prop("checked", false);
        this.idDelete = [];
      } else {
        const index: number = this.idDelete.indexOf(id);
        if (index !== -1) {
          this.idDelete.splice(index, 1);
        }
      }
    }
  }

  create(){
    
  }
  ajuda(helper){

  }
  helper(){
    
  }
  onChang($event){

  }
  getStatus(params) {
    return params.find(x => x === this.searchCriteria.valuesState);
  }
}
