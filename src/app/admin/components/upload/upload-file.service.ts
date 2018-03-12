import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ResourcesService } from '../../services/resources.service';
import { SharedService } from '../../services/shared.service';

@Injectable()
export class UploadFileService {

  constructor(private http: HttpClient, private resources: ResourcesService, private shared:SharedService) {}
 
  pushFileToStorage(file: File,rota): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
 
    formdata.append('file', file);
    formdata.append('token',this.shared.token);
 
    const req = new HttpRequest('POST', `${this.resources.BASE_URL}${rota}?action=upload`, formdata, {
      reportProgress: true,
      responseType: 'json'
    });
 
    return this.http.request(req);
  }
 
  getFiles(): Observable<string[]> {
    return this.http.get<string[]>('/getallfiles')
  }

}
