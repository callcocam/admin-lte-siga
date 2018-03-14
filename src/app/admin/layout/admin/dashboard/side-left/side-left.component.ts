import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { ResourcesService } from '../../../../services/resources.service';

@Component({
  selector: 'app-side-left',
  templateUrl: './side-left.component.html',
  styleUrls: ['./side-left.component.css']
})
export class SideLeftComponent implements OnInit {

  
  constructor(private localStorage: LocalStorageService, private resources: ResourcesService) { }
  public userLogado;

  ngOnInit() {
     this.userLogado = this.localStorage.getObject('user')
     this.userLogado.cover = `${this.resources.BASE_URL}${this.userLogado.cover}`
  }

}
