import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { SharedService } from "../../../../../services/shared.service";
import { ResourcesService } from "../../../../../services/resources.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FlashMessagesService } from "../../../../../components/flash-messages/flash-messages.service";
import { City } from "../city-edit/city";
import { Result } from '../../../../../services/result';

@Component({
  selector: "app-city-create",
  templateUrl: "./city-create.component.html",
  styleUrls: ["./city-create.component.css"]
})
export class CityCreateComponent implements OnInit {
  public dataResult = new City();
  public selectedCityId = 1;
  public fileName = "";
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
    imageAllowedTypes: ["jpeg", "jpg", "png"]
  };
  public AppForm: FormGroup;
  constructor(
    public sharedService: SharedService,
    public resources: ResourcesService,
    public router: Router,
    public route: ActivatedRoute,
    public formBuilder: FormBuilder,
    public _flashMessagesService: FlashMessagesService
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
      cep: this.formBuilder.control("", [Validators.required]),
      cuf: this.formBuilder.control("", [
        Validators.required,
        Validators.minLength(2)
      ]),
      uf: this.formBuilder.control("", [
        Validators.required,
        Validators.minLength(2)
      ]),
      ibge: this.formBuilder.control("", [Validators.required]),
      cpais: this.formBuilder.control("", [Validators.required]),
      xpais: this.formBuilder.control("", [Validators.required]),
      description: this.formBuilder.control("", [Validators.required]),
      status: this.formBuilder.control("", [Validators.required])
    });
  }

  save(value) {
    this.resources.path = "admin/cidades";
    this.resources.create(value).subscribe(
      result => {
        let res = new Result()
        Object.assign(res, result);
        this._flashMessagesService.show(res.result.msg, { cssClass: `alert-${res.result.type}`, timeout: 5000 });
        this.router.navigate([`admin/operacional/cidades/${res.result.result}/edit`])
      },
      error => {
        console.log(error);
      }
    );
  }
  upload($event) {
    this.AppForm.controls["cover"].patchValue(
      JSON.parse($event).result.location
    );
    this.fileName = this.sharedService.getSrcUrl(
      JSON.parse($event).result.location
    );
  }
  onKeyUp($event) {
    this.dataResult.title = $event;
  }
}
