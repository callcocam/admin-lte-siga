import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() itensPerPage = [
    5,10,20,50,100,200
  ]

  @Input() Status = [
   {0:"Tudo"},
   {1:"Ativo"},
   {2:"Inativo"},
   {3:"Lixeira"},
  ]
  private searchForm: FormGroup;
  private zfTableQuickSearch: FormControl;
  private zfTableItemPerPage: FormControl;
  private valuesState: FormControl;
  private start_date: FormControl;
  private end_date: FormControl;

  @Output() onSearchTerm = new EventEmitter();
  @Output() onSearchChang = new EventEmitter();
  private value;

  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.zfTableQuickSearch = this.formBuilder.control("");
    this.searchForm = this.formBuilder.group({
      zfTableQuickSearch: this.zfTableQuickSearch,
      valuesState: this.valuesState,
      zfTableItemPerPage: this.zfTableItemPerPage,
      start_date: this.start_date,
      end_date: this.end_date
    });

    this.searchForm.valueChanges.subscribe(value => (this.value = value)); this.zfTableQuickSearch = this.formBuilder.control("");
    this.searchForm = this.formBuilder.group({
      zfTableQuickSearch: this.zfTableQuickSearch,
      valuesState: this.valuesState,
      zfTableItemPerPage: this.zfTableItemPerPage,
      start_date: this.start_date,
      end_date: this.end_date
    });

    this.searchForm.valueChanges.subscribe(value => (this.value = value));
  }

  selectedDate(value: any) {
    this.searchForm.controls["start_date"].patchValue(value.start);
    this.searchForm.controls["end_date"].patchValue(value.end);
    this.submiter();
  }
  // /**
  //  * Método responsável por submeter os dados.
  //  *
  //  * @param any $event array com os dados da busca.
  //  */
  // onChang($event: any) {
  //   //TODO retornar dados a serem exibidos na tela
  //   this.onSearchChang.emit($event.target.value);
  // }

  submiter() {
    if(this.searchForm.controls["zfTableQuickSearch"].value == null){
      this.searchForm.controls["zfTableQuickSearch"].patchValue("");
    }
    if(this.searchForm.controls["end_date"].value == null){
      this.searchForm.controls["end_date"].patchValue("");
    }
    if(this.searchForm.controls["start_date"].value == null){
      this.searchForm.controls["start_date"].patchValue("");
    }
    if(this.searchForm.controls["zfTableItemPerPage"].value == null){
      this.searchForm.controls["zfTableItemPerPage"].patchValue("10");
    }
    if(this.searchForm.controls["valuesState"].value == null){
      this.searchForm.controls["valuesState"].patchValue("");
    }
    //console.log(this.value)
    this.onSearchTerm.emit(this.value);
  }
}
