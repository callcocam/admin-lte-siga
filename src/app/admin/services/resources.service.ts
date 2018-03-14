import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { DefaultRequestOptionsService } from "./default-request-options.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtTokenService } from "../layout/auth/services/jwt-token.service";
import { SharedService } from "./shared.service";
import { FlashMessagesService } from "../components/flash-messages/flash-messages.service";
import { MEAT_API } from "../../app.api";

@Injectable()
export class ResourcesService {
  public path = "";
  public BASE_URL = "http://localhost:8585/";
  public httpOptions;
  public column = [];
  public result = new DataResult();
  constructor(
    private http: HttpClient,
    private defaultReqOpt: DefaultRequestOptionsService,
    private jwtToken: JwtTokenService,
    private shared: SharedService
  ) {
    this.BASE_URL = MEAT_API;
  }
  getCriteria(order: SearchCriteria) {
    let criteria = new SearchCriteria();
    Object.assign(criteria, order);
    return criteria;
  }
  getItem(id?: any): Observable<any> {
    return this.http.get(`${this.BASE_URL}${this.path}/${id}`, this.merge());
  }

  getList(params?: any): Observable<any> {
    return this.http.get(`${this.BASE_URL}${this.path}`, this.merge(params));
  }

  create(data) {
    return this.http.post(`${this.BASE_URL}${this.path}`, data, this.merge());
  }

  update(data, params?) {
    return this.http.put(
      `${this.BASE_URL}${this.path}`,
      data,
      this.merge(params)
    );
  }
  updateStatus(data, params?) {
    return this.http.put(
      `${this.BASE_URL}${this.path}?action=status`,
      data,
      this.merge(params)
    );
  }
  delete(id: number, params?) {
    return this.http.delete(
      `${this.BASE_URL}${this.path}/${id}`,
      this.merge(params)
    );
  }

  merge(queryString?: any) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.jwtToken.token}`
      }),
      params: queryString
    };
    return this.httpOptions;
  }
}

export class SearchCriteria {
  public zfTableItemPerPage: number = 10;
  public zfTableOrder: string = "asc";
  public zfTableColumn: string = "id";
  public zfTablePage: number = 1;
  public rowAction: string = "";
  public zfTableQuickSearch: string = "";
  public valuesState: string = "";
  public start_date: string = "";
  public end_date: string = "";
}
export class DataResult {
  public paginator = {
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
    };

    public itemCountPerPage = 20;
    public iTotalDisplayRecords = 0;
    public zfTableQuickSearch = "";
    public name = "Base table";
    public itemCountPerPageValues = [];
    public showQuickSearch = false;
    public showBtnActions = true;
    public showColumnFilters = false;
    public showSelectedDate = false;
    public showPagination = true;
    public showItemPerPage = true;
    public showExportToCSV = false;
    public sEcho = []
}
