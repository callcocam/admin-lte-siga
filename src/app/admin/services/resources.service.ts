import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DefaultRequestOptionsService } from './default-request-options.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtTokenService } from '../layout/auth/services/jwt-token.service';
import { SharedService } from './shared.service';

@Injectable()
export class ResourcesService {

  public path = "";
  public BASE_URL = "http://localhost:8585/";
  
  public column=[]
  public result = {
    paginator: {
      pageCount: "",
      zfTableItemPerPage: 10,
      first: 0,
      current: 1,
      last: 0,
      next: 0,
      pagesInRange: [],
      firstPageInRange: 1,
      lastPageInRange: 0,
      currentItemCount: 0,
      totalItemCount: 0,
      firstItemNumber: 1,
      lastItemNumber: 0
    },
    itemCountPerPage: 20,
    zfTableQuickSearch: "",
    name: "Base table",
    itemCountPerPageValues: [],
    showQuickSearch: false,
    showBtnActions: true,
    showColumnFilters: false,
    showSelectedDate: false,
    showPagination: true,
    showItemPerPage: true,
    showExportToCSV: false,
    sEcho: []
  };
  constructor(
    private http: HttpClient,
    private defaultReqOpt: DefaultRequestOptionsService,
    private jwtToken:JwtTokenService,
    private shared:SharedService
  ) {
    this.BASE_URL = this.shared.BASE_URL
  }
  getCriteria(order: SearchCriteria) {
    let criteria = new SearchCriteria();
    Object.assign(criteria,order)
    return criteria;
  }
  getItem(id?: any): Observable<any> {
    return this.http.get(
      `${this.BASE_URL}${this.path}/${id}`,
      this.merge()
    );
  }

  getList(params?: any): Observable<any> {
    return this.http.get(
      `${this.BASE_URL}${this.path}`,
      this.merge(params)
    );
  }

  create(data) {
    return this.http.put(`${this.BASE_URL}${this.path}`,data,this.merge())
  }

  update(data, params?) {
    return this.http.put(`${this.BASE_URL}${this.path}`,data,this.merge(params))
  }

  delete(id: number) {}
  public httpOptions;
   merge(queryString?:any) {
       this.httpOptions = {
           headers: new HttpHeaders({
             'Content-Type':  'application/json',
             'Authorization':`Bearer ${this.jwtToken.token}`
           }),
           params: queryString
         }
      return this.httpOptions;
   }
}

export class SearchCriteria {
      public zfTableItemPerPage: number = 10;
      public zfTableOrder: string = "asc";
      public zfTableColumn: string = "id"
      public zfTablePage: number = 1
      public rowAction: string = ""
      public zfTableQuickSearch: string = ""
      public valuesState: string = ""
      public start_date: string = ""
      public end_date: string = ""
}


