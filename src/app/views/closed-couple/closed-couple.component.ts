import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { SubProductSubCategories } from 'src/app/dataModels/sub-product-sub-categories';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-closed-couple',
  templateUrl: './closed-couple.component.html',
  styleUrls: ['./closed-couple.component.css']
})
export class ClosedCoupleComponent implements OnInit, OnDestroy {

  subscribe: Subscription[] = []; // used to store subscription
  graphImg = [];
  graphImgSrc = '';
  graphImg1 = [];
  graphImgSrc1 = '';
  btn4Active: string; // used to store 4 pole motorModels
  btn6Active: string; // used to store 6 pole motorModels
  productTypes: any; // used to store different products
  fourPoleButtons = [];
  sixPoleButtons = [] ;
  toggleDisplay: string; // change display according to pump type
  parentId: string;
  config = {
    fade: true,

    // fill
    fill: true,
    fillColor: '#2F80ED',
    fillOpacity: 0.8,

    // stroke
    stroke: false,
    wrapClass : true
  };

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (this.router.url.includes('surfaceAgriPumps')) {
      this.toggleDisplay = 'surfaceAgriPumps';
      this.graphImg = ['assets/images/SACC/4poles/4_poles/img_sa_cc_4p_01A.jpg', 'assets/images/SACC/4poles/4_poles/img_sa_cc_4p_01B.jpg',
        'assets/images/SACC/4poles/4_poles/img_sa_cc_4p_03A.jpg', 'assets/images/SACC/4poles/4_poles/img_sa_cc_4p_03B.jpg',
        'assets/images/SACC/4poles/4_poles/img_sa_cc_4p_05A.jpg'];
      this.graphImgSrc = 'assets/images/SACC/4poles/4_poles/img_sa_cc_4p_base.jpg'; // 4 pole graphImg default value
      this.graphImg1 = ['assets/images/SACC/6poles/6_poles/img_sa_cc_6p_01A.jpg', 'assets/images/SACC/6poles/6_poles/img_sa_cc_6p_01B.jpg',
        'assets/images/SACC/6poles/6_poles/img_sa_cc_6p_03A.jpg', 'assets/images/SACC/6poles/6_poles/img_sa_cc_6p_03B.jpg'];
      this.graphImgSrc1 = 'assets/images/SACC/6poles/6_poles/img_sa_cc_6p_base.jpg'; // 6 pole graphImg default value
    }
    else if (this.router.url.includes('multiPurposePumps')) {
      this.toggleDisplay = 'multiPurposePumps';
      this.graphImg = ['assets/images/MpGraph/Frame22.png', 'assets/images/MpGraph/Frame23.png',
        'assets/images/MpGraph/Frame26.png', 'assets/images/MpGraph/Frame25.png', 'assets/images/MpGraph/Frame24.png'];
      this.graphImgSrc = 'assets/images/MpGraph/Frame21.png'; // 4 pole graphImg default value
    }

    this.subscribe.push(this.activatedRoute.params.subscribe(res => {
      if (res[`id`]) {
        this.parentId = res?.parentId;
        // console.log('par444', res)
        this.getProductDetails(res.id, res.parentId);
      }
    }));
  }

  // function to getProductDetails according to productId
  // getProductDetails(productId: string, parentId: string): void {
  //   const productType = new Set(); // creating a new set of productType
  //   this.subscribe.push(this.apiService.productsByCategory(productId, parentId)
  //     .pipe(map(res => {
  //       const products: SubProductSubCategories[] = res[`products`]; // assigning product from response in products Array
  //       const newRes = []; // newRes array to push the result
  //       products.forEach((element) => {
  //         if (element.pole === 4) { // checking element pole type is 4 or not
  //           productType.add(element.code); // adding 4 pole product to productType set to eradicate duplicity
  //           this.fourPoleButtons.add(element.code); // adding the 4 pole product in fourPoleButtons array
  //           [...this.fourPoleButtons].sort()
  //           console.log('4pole', this.fourPoleButtons)
  //         }
  //         else if (element.pole === 6) { // checking element pole type is 6 or not
  //           productType.add(element.code); // adding 6 pole product to productType set to eradicate duplicity
  //           this.sixPoleButtons.add(element.code); // adding the 6 pole product in fourPoleButtons array
  //         }
  //       });
  //       // pushing the result in newRes array and returning the newRes array
  //       newRes.push(this.fourPoleButtons);
  //       newRes.push(this.sixPoleButtons);
  //       return newRes;
  //     }))
  //     .subscribe(res => {
  //       this.productTypes = res; // assigning newRes to productTypes
  //       console.log('product', this.productTypes.sort())
  //     })
  //   );
  // }

  getProductDetails(productId: string, parentId: string): void {
    this.subscribe.push(this.apiService.productsByCategory(productId, parentId).subscribe(res => {
      if (res[`code`] === 200){
        const products: SubProductSubCategories[] = res[`products`];
        // console.log(products)
        products.forEach(element => {
          if (element.pole === '4') {
            this.fourPoleButtons.push(element.code);
            // this.fourPoleButtons = (a, b) => a.localeCompare(b, 'en', { numeric: true });
            // this.fourPoleButtons = this.fourPoleButtons.sort(new Intl.Collator('en',{numeric:true, sensitivity:'accent'}).compare);
          }else if (element.pole === '6'){
            this.sixPoleButtons.push(element.code);
          }
        });
        this.fourPoleButtons.sort((a, b) => +a.substring(4, 7) - (+b.substring(4, 7)));
      }
    }));
  }

  activateBtn(pole, event): void {
    if (pole === 4){
      this.btn4Active = event.target.title;
    }
    else if (pole === 6){
      this.btn6Active = event.target.title;
    }
  }

  deActivateBtn(pole): void{
    if (pole === 4) {
      this.btn4Active = '';
    }
    else if (pole === 6) {
      this.btn6Active = '';
    }
  }

  // mouseenter function to change image according motorModel of 4 or 6 poles
  changeGraphImg(index: number, motorModel: string): void {
    if (index === 1) {
      this.btn4Active = motorModel; // assign 4poles buttons if index is 1
    } else if (index === 2) {
      this.btn6Active = motorModel; // assign 6poles motorModel if index is 2
    } else if (index === 3) {
      this.btn4Active = motorModel;
    }

    // switching graphImg according to index and motorModel
    if (index === 1) {
      switch (motorModel) {
        case 'AGCA01A':
          this.graphImgSrc = this.graphImg[0];
          break;
        case 'AGCA05A':
          this.graphImgSrc = this.graphImg[4];
          break;
        case 'AGCA03A':
          this.graphImgSrc = this.graphImg[2];
          break;
        case 'AGCA03B':
          this.graphImgSrc = this.graphImg[3];
          break;
        case 'AGCA01B':
          this.graphImgSrc = this.graphImg[1];
          break;
        default:
          this.graphImgSrc = this.graphImg[0];
      }
    } else if (index === 2) {
      switch (motorModel) {
        case 'AGCA01A':
          this.graphImgSrc1 = this.graphImg1[0];
          break;
        case 'AGCA01B':
          this.graphImgSrc1 = this.graphImg1[1];
          break;
        case 'AGCA03A':
          this.graphImgSrc1 = this.graphImg1[2];
          break;
        case 'AGCA03B':
          this.graphImgSrc1 = this.graphImg1[3];
          break;
        default:
          this.graphImgSrc = this.graphImg1[0];
      }
    } else if (index === 3) {
      switch (motorModel) {
        case 'DCAC051':
          this.graphImgSrc = this.graphImg[0];
          break;
        case 'DCCA041':
          this.graphImgSrc = this.graphImg[1];
          break;
        case 'DCCC012':
          this.graphImgSrc = this.graphImg[2];
          break;
        case 'DCCC022':
          this.graphImgSrc = this.graphImg[3];
          break;
        case 'DCCC032':
          this.graphImgSrc = this.graphImg[4];
          break;
        default:
          this.graphImgSrc = this.graphImg[0];
      }
    }

  }

  // mouseleave function to closeGraph Image according to index
  closeGraphImg(index: number): void {
    if (index === 1) {
      this.btn4Active = '';
      this.graphImgSrc = 'assets/images/SACC/4poles/img_sa_cc_4p_base.jpg';
    } else if (index === 2) {
      this.btn6Active = '';
      this.graphImgSrc1 = 'assets/images/SACC/6poles/img_sa_cc_6p_base.jpg';
    } else if (index === 3) {
      this.btn4Active = '';
      this.graphImgSrc = 'assets/images/MpGraph/Frame21.png';
    }
  }

  // unsubscribing the subscription
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.subscribe.forEach(sub => {
      if (sub) {
        sub.unsubscribe();
      }
    });
  }

}
