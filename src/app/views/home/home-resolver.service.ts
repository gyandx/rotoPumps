import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute
} from '@angular/router';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';

@Injectable({ providedIn: 'root' })

export class HomeDetailsResolver implements Resolve<any> {

  constructor(private appService: ApiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   const homeDetails = this.appService.homePage();
  //  const retroSpares = this.appService.retroSpares();


   return forkJoin([homeDetails]).pipe(map(([homeData]) => {
    // forkJoin returns an array of values, here we map those values to an object
    return {homeData};
  }));
  }
}

