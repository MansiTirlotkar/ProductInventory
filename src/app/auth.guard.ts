import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { SellerService } from './services/seller.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Or specify the appropriate module
})
export class authGuard implements CanActivate {
  constructor(private sellerService: SellerService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('seller')) {
      return true;
    }
    
    // You should handle the async nature of isSellerLoggedIn
    return this.sellerService.isSellerLoggedIn; // Assuming isSellerLoggedIn returns an Observable<boolean>
  }
}


