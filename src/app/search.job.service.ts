import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { query } from '@angular/animations';
import { map, Observable, tap } from 'rxjs';
import { JobDTO } from './dto/job.dto';
import { ResponseJobDTO } from './dto/response-job.dto';

@Injectable({
  providedIn: 'root'
})
export class SearchJobService {

  private baseUrlApi = "https://arbeitnow-free-job-board.p.rapidapi.com/api/job-board-api";

  constructor(private http: HttpClient) { }

  public getJob(): Observable<JobDTO[]> {
   
    return this.http.get<ResponseJobDTO>(`${this.baseUrlApi}`, 
    {
      headers: new HttpHeaders(
      {
        'X-RapidAPI-Key': 'c2daaa4e23msh6e95697c68eb0dcp142acdjsn8f8234cac6fe',
        'X-RapidAPI-Host': 'arbeitnow-free-job-board.p.rapidapi.com'
      })

    }).pipe(map((responseJobDTO) => responseJobDTO.data))
  }
}
