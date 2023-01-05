import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SearchJobService } from "../services/search.job.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class InterceptorJobService implements HttpInterceptor{
      
    constructor() { }
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
        req.headers
        .set('X-RapidAPI-Key', environment.rapidApiKey)
        .set('X-RapidAPI-Host', environment.rapidApiHost);

       let cloneReq =  req.clone({ headers: req.headers});
        
      return next.handle(cloneReq);
    }
    
}