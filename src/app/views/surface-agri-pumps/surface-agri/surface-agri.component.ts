import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { SubProductCategories } from '../../../dataModels/sub-product-categories';

@Component({
  selector: 'app-surface-agri',
  templateUrl: './surface-agri.component.html',
  styleUrls: ['./surface-agri.component.css']
})
export class SurfaceAgriComponent implements OnInit, OnDestroy {

  productId: string; // used to store productId
  subCategories: SubProductCategories[] = new Array(); // assigning subCategories array of SubProductCategories type
  subscription: Subscription[] = []; // used to store subscription

  constructor(private activatedRoute: ActivatedRoute, private route: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    // getting productId from routerParams
    this.subscription.push(this.activatedRoute.params.subscribe(res => {
      if (res) {
        this.productId = res.id;
        this.getProductDetails(this.productId);
      }
    }));
  }

  // function to getProduct details subCategories
  getProductDetails(productId: string): void {
    this.subscription.push(this.apiService.subCategory(productId).subscribe(res => {
      if (res[`code`] === 200) {
        this.subCategories = res[`categories`]; // assigning subCategories from subCategory api
      }
    }));
  }

  // function to change route according to categoryTitle
  routeToPage(categoryTitle: string, categoryId: string, parentId: string): void {
    if (categoryTitle === 'Close Coupled pump') {
      this.route.navigate(['./closedCouplePump', categoryId, parentId], { relativeTo: this.activatedRoute });
    }
    else if (categoryTitle === 'Bare Shaft Pump') {
      this.route.navigate(['./bareShaftPump', categoryId, parentId], { relativeTo: this.activatedRoute });
    }
  }

  // used to unsubscribe subscription
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.subscription.forEach(sub => {
      if (sub) {
        sub.unsubscribe();
      }
    });
  }

}
