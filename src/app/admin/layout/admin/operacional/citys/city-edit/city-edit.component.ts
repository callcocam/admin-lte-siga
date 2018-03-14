import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../../../services/shared.service';
import { ResourcesService } from '../../../../../services/resources.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City } from './city';
import { Subject } from 'rxjs/Subject';
import { FlashMessagesService } from '../../../../../components/flash-messages/flash-messages.service';
import { Result } from '../../../../../services/result';

@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.css']
})
export class CityEditComponent implements OnInit {
  public dataResult = new City();
  public selectedCityId=1;
  public fileName = ""
  public options: Object = {
   // charCounterCount: true,
    // Set the image upload parameter.
    //imageUploadParam:  this.resources.merge,
    // Additional upload params.
    imageUploadParams: this.sharedService.getToken(),
    // Set the image upload URL.
    imageUploadURL: `${this.resources.BASE_URL}admin/editor?action=upload`,
    // Set request type.
    //imageUploadMethod: 'POST',

    // Set max image size to 5MB.
    imageMaxSize: 5 * 1024 * 1024,

    // Allow to upload PNG and JPG.
    imageAllowedTypes: ['jpeg', 'jpg', 'png'],
 
  };
  public AppForm: FormGroup;
  constructor(
    public sharedService: SharedService,
    public resources: ResourcesService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public _flashMessagesService:FlashMessagesService
  ) {}

  ngOnInit() {
    this.resources.path = "admin/cidades";
    this.AppForm = this.formBuilder.group({
      id: this.formBuilder.control(""),
      empresa: this.formBuilder.control(""),
      cover: this.formBuilder.control(""),
      title: this.formBuilder.control("", [
        Validators.required,
        Validators.minLength(5)
      ]),
      cep: this.formBuilder.control("", [
        Validators.required 
      ]),
      cuf: this.formBuilder.control("", [
        Validators.required,
        Validators.minLength(2)
      ]),
      uf: this.formBuilder.control("", [
        Validators.required,
        Validators.minLength(2)
      ]),
      ibge: this.formBuilder.control("", [
        Validators.required
      ]),
      cpais: this.formBuilder.control("", [
        Validators.required
      ]),
      xpais: this.formBuilder.control("", [
        Validators.required
      ]),
      description: this.formBuilder.control("", [
        Validators.required
      ]),
      status: this.formBuilder.control("", [
        Validators.required
      ]),
    });
    this.getItem();
  }

  getItem() {
    this.route.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
          this.resources.getItem(+params['id']).subscribe((data)=>{
            this.sharedService.AdminLTE.init();
            this.dataResult = data.result.you_response
            this.AppForm.controls["id"].patchValue(this.dataResult.id);
            this.AppForm.controls["cover"].patchValue(this.dataResult.cover);
            this.AppForm.controls["empresa"].patchValue(this.dataResult.empresa);
            this.AppForm.controls["title"].patchValue(this.dataResult.title);
            this.AppForm.controls["cep"].patchValue(this.dataResult.cep);
            this.AppForm.controls["cuf"].patchValue(this.dataResult.cuf);
            this.AppForm.controls["uf"].patchValue(this.dataResult.uf);
            this.AppForm.controls["ibge"].patchValue(this.dataResult.ibge);
            this.AppForm.controls["cpais"].patchValue(this.dataResult.cpais);
            this.AppForm.controls["xpais"].patchValue(this.dataResult.xpais);
            //this.AppForm.controls["status"].setValue(this.dataResult.status);
            this.AppForm.controls["description"].patchValue(this.dataResult.description);
            if(this.dataResult.status == 1){
              this.sharedService.selected = this.sharedService.defaultBindingsStatus[0]
            }
            if(this.dataResult.status == 2){
              this.sharedService.selected = this.sharedService.defaultBindingsStatus[1]
            }
            if(this.dataResult.status == 3){
              this.sharedService.selected = this.sharedService.defaultBindingsStatus[2]
            }
            this.fileName = this.sharedService.getSrcUrl(this.dataResult.cover)
          })
      }
      else{
        this.router.navigate['/admin/operacional/cidades']
      }
    });

  }

  save(data){
    this.resources.path = "admin/cidades"
    this.resources.update(data,{id:this.dataResult.id}).subscribe(
      (result)=>{
        let res = new Result()
        Object.assign(res, result);
        this._flashMessagesService.show(res.result.msg, { cssClass: `alert-${res.result.type}`, timeout: 5000 });
       },
      (error)=>{
        console.log(error)
      }
    )
  }
  upload($event){
    this.AppForm.controls["cover"].patchValue(JSON.parse($event).result.location);
    this.fileName = this.sharedService.getSrcUrl(JSON.parse($event).result.location)
  }

  
  onKeyUp($event){
    this.dataResult.title = $event
  }

}
