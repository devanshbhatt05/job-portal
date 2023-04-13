import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Job} from 'src/app/Job';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  )
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private API_URL = 'http://localhost:5300/joblist'

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Job[]> {
    return this.http.get<Job[]>(this.API_URL);
   
  }

  
}
