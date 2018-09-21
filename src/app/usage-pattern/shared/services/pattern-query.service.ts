import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatternQueryService {

  constructor(
    private http: HttpClient
) {}

public getIps(ip: string): Observable<any> {
    return this.http.get<any>(`/proxy/list/${ip}`);
}
}
