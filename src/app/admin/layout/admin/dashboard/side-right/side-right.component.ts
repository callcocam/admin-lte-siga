import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../../services/local-storage.service';

@Component({
  selector: 'app-side-right',
  templateUrl: './side-right.component.html',
  styleUrls: ['./side-right.component.css']
})
export class SideRightComponent implements OnInit {

  constructor(private localStorage: LocalStorageService) { }
  private userLogado;
  ngOnInit() {
     this.userLogado = this.localStorage.getObject('user')
  }

}
