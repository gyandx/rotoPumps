import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';


@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor(private spinner: NgxSpinnerService, private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinner.show();
    let authReq;
    if (request.url) {
      // setting headers for api requests
      authReq = request.clone({
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS, GET, PUT, PATCH, POST, DELETE',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
        })
      });
      return next.handle(authReq).pipe(tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.spinner.hide();
          }
        }, error => {
          if (error?.status === 0 || error?.status) {
            // handle error according to status code
            switch (error?.status) {
              case 404:
                this.spinner.hide();
                this.router.navigate(['/error'], { queryParams: { errorMsg: 'Page Not Found' } });
                break;
              case 500:
                this.spinner.hide();
                this.router.navigate(['/error'], { queryParams: { errorMsg: 'Something went wrong' } });
                break;
              case 403:
                this.spinner.hide();
                this.router.navigate(['/error'], { queryParams: { errorMsg: 'Something went wrong' } });
                break;
              case 502:
                this.spinner.hide();
                this.router.navigate(['/error'], { queryParams: { errorMsg: 'Something went wrong' } });
                break;
              case 503:
                this.spinner.hide();
                this.router.navigate(['/error'], { queryParams: { errorMsg: 'Something went wrong' } });
                break;
              case 504:
                this.spinner.hide();
                this.router.navigate(['/error'], { queryParams: { errorMsg: 'Something went wrong' } });
                break;
              case 101:
                this.spinner.hide();
                this.router.navigate(['/error'], { queryParams: { errorMsg: 'No Internet Connection' } });
                break;
              case 0:
                console.log('internet');
                this.spinner.hide();
                this.router.navigate(['/error'], { queryParams: { errorMsg: 'Error In Connection' } });
                break;
              default:
                this.spinner.hide();
            }
          }
        }
      ));
    } else {
      return next.handle(request);
    }
  }
}
