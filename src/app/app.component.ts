import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { JobDTO } from './dto/job.dto';
import { SearchJobService } from './search.job.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JobSearch';
  jobs$: Observable<JobDTO[]> = of();

  constructor (private searchJobService : SearchJobService) {

  }

  ngOnInit() {
    this.getJobs();
  }

  getJobs() {
    //console.log("test coomp")
    this.jobs$ = this.searchJobService.getJob().pipe(
      tap(data => {console.log(data)})
      );
  }

}
