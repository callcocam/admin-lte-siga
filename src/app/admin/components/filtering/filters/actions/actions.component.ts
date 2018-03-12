import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ResourcesService } from '../../../../services/resources.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  @Input() route: string = "admin"
  @Input() helper: string = "admin"
  @Input() arrayDealete = [];

  @Output() emitCreated = new EventEmitter()
  @Output() emitUpdate = new EventEmitter()
  @Output() emitAjuda = new EventEmitter()
  @Output() emitDelete = new EventEmitter()
  constructor(private resources: ResourcesService) { }

  ngOnInit() {
  }
  create(){
    console.log('create')
    this.emitCreated.emit('create')
  }
  updateState(id){
    console.log(id)
    //this.resources.path = this.route;
    //this.resources.update({status:id})
    this.emitUpdate.emit(id)
  }
  deletes(){
    console.log(this.arrayDealete)
    this.emitDelete.emit(this.arrayDealete)
  }
  ajuda(){
    console.log(`Ajuda ${this.helper}`)
    this.emitUpdate.emit(this.helper)
  }
}