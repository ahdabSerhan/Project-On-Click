import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,
  HttpParams,
  HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
                             /* 'Access-Control-Allow-Origin' : '*' */
                            })
};

@Injectable({
  providedIn: 'root'
})
export class MilestoneService {
  private milestoneUrl = 'https://jsonblob.com/api/02ca9ba3-7ab2-11e8-8a72-5f075d20ac24/';
  constructor(private http: HttpClient) { }

  getMilestones(): Observable<Milestone[]> {
    return this.http.get<Milestone[]>( this.milestoneUrl );
  }
}

