import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  private options= {headers: new HttpHeaders().set('Content-Type','application/json')};
  public errorMessage: any;
  private api: string = environment.apiUrl;
  constructor(private http: HttpClient) { 
  }
public get(path: string, params: HttpParams= new HttpParams()): Observable<any>{
  return this.http.get(this.api + path);
}
public put(path: string, body: object = {}, params: HttpParams = new HttpParams()) : Observable<any>{
  return this.http.put(this.api + path + {params},JSON.stringify(body),this.options,);
}
public post(path:string, body: object={}) : Observable<any>{
  return this.http.post(this.api + path,JSON.stringify(body),this.options)
}
public delete(path:string, params: HttpParams= new HttpParams()):Observable<any>{
  return this.http.delete(this.api + path + {params})
}


}
