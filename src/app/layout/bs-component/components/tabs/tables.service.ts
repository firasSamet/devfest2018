import { TabsComponent } from './tabs.component'
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import 'rxjs';

import { Observable } from 'rxjs';
// import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Data } from './data';


export interface TableOlive {
    score: number;
    size: string;
     location: string;
}

@Injectable()
export class TableOliveService {    
    JsonRespUrl = 'http://www.mocky.io/v2/5baf5e932e00008800bb43ae';
    constructor(private http: HttpClient) { }

    getConfigResponse(): Observable<HttpResponse<TableOlive[]>> {
        return this.http.get<TableOlive[]>(
            this.JsonRespUrl, { observe: 'response' });
    }



}