import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { query } from '@angular/animations';
import { map, Observable, tap } from 'rxjs';
import { JobDTO } from './dto/job.dto';
import { ResponseJobDTO } from './dto/response-job.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchJobService {

  private baseUrlApiServer = environment.baseUrlApi ;
  private headersServer = environment.headers;

  constructor(private http: HttpClient) { }

  public getJob(): Observable<JobDTO[]> {
   
    return this.http.get<ResponseJobDTO>(`${this.baseUrlApiServer}`, 
    {
      headers: new HttpHeaders(this.headersServer)

    }).pipe(map((responseJobDTO) => responseJobDTO.data))
  }
}
