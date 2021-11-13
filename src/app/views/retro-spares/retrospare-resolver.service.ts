import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute
} from '@angular/router';
import { map } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';

@Injectable({ providedIn: 'root' })

export class RetroSpareResolver implements Resolve<any> {

  constructor(private appService: ApiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.appService.retroSubProductCategory(route.params[`id`]).pipe(map(data => {
      if (data[`code`] === 200){
        return data[`products`];
      }else {
        return [];
      }
    }));
  }
}

