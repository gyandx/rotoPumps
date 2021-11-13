import { Component, OnInit  } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductCategories } from '../../dataModels/product-categories';
import { ActivatedRoute, Router } from '@angular/router';
import { RetroSubSpareDetails } from '../../dataModels/retroSpareSubCat';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  navClass: string; // scroll class name
  productData: ProductCategories[] = new Array(); // variable to store product data
  retroSpares: Array<any> = [];
  retroSparesDetails: RetroSubSpareDetails[] = [];
  enquiryForm: FormGroup; // address form of type formGroup
  cityInfo: any[] = ['']; // used to store city data
  stateInfo: any[] = []; // used to store state data
  countryInfo: any[] = []; // used to store country data

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {

    if (this.activatedRoute.snapshot.data[`homeData`].homeData.code === 200){
      this.productData = this.activatedRoute.snapshot.data[`homeData`].homeData.categories;
      this.productData.forEach(element => {
        switch (element.name){
          case 'Surface Agri pumps':
            element.imageUrl = 'assets/images/banner/SAP-AG-Home.jpg';
            break;
          case 'Multi-purpose Pumps':
            element.imageUrl = 'assets/images/banner/DC.png';
            break;
          case 'Roto Spares':
            element.imageUrl = 'assets/images/banner/Retrofit1home.jpg';
            break;
        }
      });
    }

    // if (this.activatedRoute.snapshot.data[`homeData`].retroSparesDetails.code === 200){
    //   this.retroSpares = this.activatedRoute.snapshot.data[`homeData`].retroSparesDetails.categories;
    //   const defaultRetroSpareId = this.retroSpares[0].id;
    //   this.getSparesSubCategory(defaultRetroSpareId);
    // }
  }

  readMore(product){
    console.log(product);
    if (product === 'Surface Agri pumps'){
      this.router.navigate(['/tirrana-agricultural-pump-new']);
    }else if (product === 'Multi-purpose Pumps'){
      this.router.navigate(['/tirrana-general-pump']);
    }
  }

  getSparesSubCategory(spareId): void {
    this.apiService.retroSubCategoryDetails(spareId).subscribe(res => {
      if (res[`code`] === 200){
        this.retroSparesDetails = res[`categories`];
      }
    });
  }
  // function to change spare
  changeSpare(spareId): void{
    this.getSparesSubCategory(spareId);
  }

  // function to change route according to productName
  routeChange(productName: string, productId: number): void {
    if (productName === 'Surface Agri pumps'){
      this.router.navigate(['/surfaceAgriPumps', productId]);
    }
    else if (productName === 'Multi-purpose Pumps'){
      this.router.navigate(['/multiPurposePumps', productId]);
    }
    else if (productName === 'Roto Spares'){
      this.router.navigate(['/rotoSpares', productId]);
    }
  }

  // function to scroll to a particular section using scrollIntoView.
  navigateToSection(section: string): void{
    this.navClass = section;
    const element = document.getElementById(section);
    element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }


}
