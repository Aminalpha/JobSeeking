import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { catchError, Observable, of, throwError } from 'rxjs';
import { JobDTO } from '../dto/job.dto';
import { ResponseJobDTO } from '../dto/response-job.dto';

import { SearchJobService } from './search.job.service';

describe('SearchJobService', () => {
  let searchJobService: SearchJobService;
  let httpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    let httpClientSpyc = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        SearchJobService,
        {
          provide: HttpClient,
          useValue: httpClientSpyc,
        },
      ],
    });
    searchJobService = TestBed.inject(SearchJobService);
    httpClient = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(searchJobService).toBeTruthy();
  });

  it('should get jobs', (done: DoneFn) => {
    // 1. initialisation et mockage des dependance de la methode a tester
    let mockResponseJobDto: Observable<ResponseJobDTO> = of({
      data: [{description: "desc 1", title: "title 1"}] ,
      links: {},
      meta: {},
    } as ResponseJobDTO);

    httpClient.get.and.returnValue(mockResponseJobDto);

    // 2. appelle de la methode a tester
    let jobs$ = searchJobService.getJob();

    // 3. faire des verification : si tout a bien fonctionner
    jobs$.subscribe({
      next: (data: JobDTO[]) => {
        expect(data.length).toEqual(1);
        done();
      },
      error: () => {
        done.fail
      },
    });
    expect(httpClient.get).toHaveBeenCalledTimes(1);

  });

  it('should not get jobs', (done: DoneFn) => {
    // 1. initialisation et mockage des dependance de la methode a tester
    let httpClientGetError = new Error("Service not available");
    httpClient.get.and.returnValue( throwError (() => httpClientGetError));
    
    // 2 et 3. appelle de la methode a tester et faire des verification : si tout a bien fonctionner
   searchJobService.getJob().subscribe({
    next: () => {
      done.fail
    },
    error: (error) => {
      expect(error).toEqual(httpClientGetError);
      done();
    }
   });
   expect(httpClient.get).toHaveBeenCalledTimes(1);

  });

  it('should not get jobs because data ResponseJobDTO response not valid', (done: DoneFn) => {
    //initialisation et mockage des dependances
    let mockResponseJobDto: Observable<ResponseJobDTO> = of({
      links: {},
      meta: {},
    } as ResponseJobDTO); 

    let httpClientGetError = new Error("Invalid ResponseJobDto");
    httpClient.get.and.returnValue(mockResponseJobDto);
    
    //appel de la methode a tester et verification si tt a bien fonctionne
    searchJobService.getJob().subscribe({
      next: () => {
        done.fail;
        
      },
      error: (error) => {
        expect(error).toEqual(httpClientGetError);
        done();
        
      }
    });
    expect(httpClient.get).toHaveBeenCalledTimes(1);

  });

});
