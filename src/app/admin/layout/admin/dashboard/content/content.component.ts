import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../../services/shared.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(protected sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.AdminLTE.init();
  }

}
