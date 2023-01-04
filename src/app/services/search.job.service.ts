import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { JobDTO } from '../dto/job.dto';
import { ResponseJobDTO } from '../dto/response-job.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchJobService {
  private baseUrlApiServer = environment.baseUrlApi;

  constructor(private http: HttpClient) {}

  public getJob(): Observable<JobDTO[]> {
    return this.http.get<ResponseJobDTO>(`${this.baseUrlApiServer}`).pipe(
      map((responseJobDTO) => {
        if (responseJobDTO.data === undefined)
          throw new Error('Invalid ResponseJobDto');
        return responseJobDTO.data;
      })
    );
  }
}
