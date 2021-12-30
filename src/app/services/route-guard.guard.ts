import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable()

export class RouteGuard implements CanActivate {

  constructor(private toaster: ToastrService, private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // to guard the route if user-id present the allow entry to particular component otherwise navigate to sign-in.
    if (sessionStorage.getItem('id')){
      return true;
    }else{
      this.toaster.success('Please sign-in to continue');
      this.router.navigate(['/sign-in']);
    }
  }

}
