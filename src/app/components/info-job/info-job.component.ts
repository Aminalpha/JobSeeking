import { Component, OnInit } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { JobDTO } from '../../dto/job.dto';

@Component({
  selector: 'app-info-job',
  templateUrl: './info-job.component.html',
  styleUrls: ['./info-job.component.css']
})
export class InfoJobComponent implements OnInit {
  jobs$: Observable<JobDTO[]> = of();

  constructor() { }

  ngOnInit(): void {
  }

}
