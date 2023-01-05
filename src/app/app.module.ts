import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchJobService } from './services/search.job.service';
import { InfoJobComponent } from './components/info-job/info-job.component';
import { InterceptorJobService } from './interceptors/interceptor.job.service';

@NgModule({
  declarations: [
    AppComponent,
    InfoJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SearchJobService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorJobService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
