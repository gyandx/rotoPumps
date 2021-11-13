import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { CartDetails } from 'src/app/dataModels/cart-details';

export interface OrderResponse {
  code: number;
  details: {};
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartResolverService implements Resolve<OrderResponse>{

  constructor(private apiService: ApiService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | OrderResponse {
    // if (localStorage.getItem('cartId')) {
    if (sessionStorage.getItem('cartId')) {
      // return this.apiService.getCartById(window.atob(localStorage.getItem('cartId'))).pipe(map((data: CartDetails)  => {
      return this.apiService.getCartById(window.atob(sessionStorage.getItem('cartId'))).pipe(map((data: CartDetails)  => {
        if (+data[`code`] === 200) {
          return JSON.parse(data[`details`].cart);
        } else {
          return [];
        }
      }));
    }
  }
}
