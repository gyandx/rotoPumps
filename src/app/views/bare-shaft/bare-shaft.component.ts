import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { SubProductSubCategories } from 'src/app/dataModels/sub-product-sub-categories';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-bare-shaft',
  templateUrl: './bare-shaft.component.html',
  styleUrls: ['./bare-shaft.component.css']
})
export class BareShaftComponent implements OnInit, OnDestroy {

  toggleDisplaySurfaceAgri: boolean = false; // used to show/hide data according to condition
  toggleDisplayMultipurpose: boolean = false; // used to show/hide data according to condition
  motorModel: string; // used to store motorModel number
  motorPole: string; // used to store motorModel pole
  subscribe: Subscription[] = []; // used to store subscription
  graphImg = [];
  graphImgSrc = '';
  graphImg1 = [];
  graphImgSrc1 = '';
  btn4Active: string; // used to store 4 pole motorModels
  btn6Active: string; // used to store 6 pole motorModels
  productTypes: any; // used to store different products
  fourPoleButtons = []; // creating new Set
  sixPoleButtons = [];
  togglePage: string; // used to change page contents according to type
  parentId: string;
  showMotorDisplay: boolean = false;
  motorData = [];
  msg: string = "";
  leftGraphImg: string;
  rightGraphImg: string;
  tableHead = [];
  feet: any;
  toggleUnit: boolean = false;
  driveType: string = '';
  config = {
    fade: true,

    // fill
    fill: true,
    fillColor: '#2F80ED',
    fillOpacity: 0.8,

    // stroke
    stroke: false
  };

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.btn4Active = '';
    if (this.router.url.includes('surfaceAgriPumps')) {
      this.togglePage = 'surfaceAgriPumps';
      this.toggleUnit = true;
      this.graphImg = ['assets/images/SABS/SABS/AGAA-01B.jpg', 'assets/images/SABS/SABS/AGAA-03A.jpg',
        'assets/images/SABS/SABS/AGAA-03B.jpg', 'assets/images/SABS/SABS/AGAA-05A.jpg', 'assets/images/SABS/SABS/AGAA-05B.jpg',
        'assets/images/SABS/SABS/AGAA-07A.jpg', 'assets/images/SABS/SABS/AGAA-07B.jpg', 'assets/images/SABS/SABS/AGAA-01A.jpg'];
      this.graphImgSrc = 'assets/images/SABS/SABS/AGAA.jpg'; // 4 pole graphImg default value
      this.activatedRoute.queryParams.subscribe(res => {
        if (Object.keys(res).length) {
          if (res[`model`]){
            this.showMotor(res[`model`], 4);
          }else{
            this.driveType = res[`driveType`];
            this.showMotor(res[`search`], 4);
          }
        }
      });
    }
    else if (this.router.url.includes('multiPurposePumps')) {
      this.togglePage = 'multiPurposePumps';
      this.graphImg = ['assets/images/MpGraph/Frame22.png', 'assets/images/MpGraph/Frame23.png',
        'assets/images/MpGraph/Frame26.png', 'assets/images/MpGraph/Frame25.png', 'assets/images/MpGraph/Frame24.png'];
      this.graphImgSrc = 'assets/images/MpGraph/Frame21.png'; // 4 pole graphImg default value
      this.activatedRoute.queryParams.subscribe(res => {
        if (Object.keys(res).length) {
          if (res[`model`]){
            this.showMotor(res[`model`], 4);
          }else{
            this.driveType = res[`driveType`];
            this.showMotor(res[`search`], 4);
          }
        }
      });
    }
    this.subscribe.push(this.activatedRoute.params.subscribe(res => {
      if (res) {
        this.parentId = res?.parentId;
        // console.log('par444', res)
        this.getProductDetails(res.id, res.parentId);
      }
    }));
  }

  activateBtn(pumpType: string, event): void{
    if (pumpType === 'MPBS'){
      this.btn4Active = event.target.title;
    }
    else if (pumpType === 'SABS'){
      this.btn4Active = event.target.title;
    }
  }

  deActivateBtn(pumpType: string): void{
    if (pumpType === 'MPBS'){
      this.btn4Active = '';
    }
    else if (pumpType === 'SABS') {
      this.btn4Active = '';
    }
  }

  getProductDetails(productId: string, parentId: string): void {
    this.subscribe.push(this.apiService.productsByCategory(productId, parentId).subscribe(res => {
      if (res[`code`] === 200) {
        const products: SubProductSubCategories[] = res[`products`];
        products.forEach(element => {
          if (element.pole === '4') {
            this.fourPoleButtons.push(element.code);
           } else if (element.pole === '6') {
            this.sixPoleButtons.push(element.code);
          }
        });
        this.fourPoleButtons.sort((a, b) => +a.substring(4, 7) - (+b.substring(4, 7)));
      }
    }));
  }

  // mouseenter function to change image according motorModel of 4 or 6 poles
  changeGraphImg(index: number, motorModel: string): void {
    // console.log(motorModel, 'model');
    if (index === 1) {
      this.btn4Active = motorModel; // assign 4pole buttons if index is 1
    } else if (index === 2) {
      this.btn6Active = motorModel; // assign 6pole motorModel if index is 2
    } else if (index === 3) {
      this.btn4Active = motorModel; // assign 6pole motorModel if index is 2
    }

    // switching graphImg according to index and motorModel
    if (index === 1) {
      switch (motorModel) {
        case 'AGAA01B':
          this.graphImgSrc = this.graphImg[0];
          this.leftGraphImg = 'assets/images/GraphBs/AGAA01B/CapacityLitrespersec-Page13.png';
          this.rightGraphImg = 'assets/images/GraphBs/AGAA01B/AbsorbedPowerkW-Page13.png';
          break;
        case 'AGAA03A':
          this.graphImgSrc = this.graphImg[1];
          this.leftGraphImg = 'assets/images/GraphBs/AGAA03A/CapacityLitrespersec-Page14.png';
          this.rightGraphImg = 'assets/images/GraphBs/AGAA03A/AbsorbedPowerkW-Page14.png';
          break;
        case 'AGAA03B':
          this.graphImgSrc = this.graphImg[2];
          this.leftGraphImg = 'assets/images/GraphBs/AGAA03B/CapacityLitrespersec-Page15.png';
          this.rightGraphImg = 'assets/images/GraphBs/AGAA03B/AbsorbedPowerkW-Page15.png';
          break;
        case 'AGAA05A':
          this.graphImgSrc = this.graphImg[3];
          this.leftGraphImg = 'assets/images/GraphBs/AGAA05A/CapacityLitrespersec-Page16.png';
          this.rightGraphImg = 'assets/images/GraphBs/AGAA05A/AbsorbedPowerkW-Page16.png';
          break;
        case 'AGAA05B':
          this.graphImgSrc = this.graphImg[4];
          this.leftGraphImg = 'assets/images/GraphBs/AGAA05B/CapacityLitrespersec-Page17.png';
          this.rightGraphImg = 'assets/images/GraphBs/AGAA05B/AbsorbedPowerkW-Page17.png';
          break;
        case 'AGAA07A':
          this.graphImgSrc = this.graphImg[5];
          this.leftGraphImg = 'assets/images/GraphBs/AGAA07A/CapacityLitrespersec-Page18.png';
          this.rightGraphImg = 'assets/images/GraphBs/AGAA07A/AbsorbedPowerkW-Page18.png';
          break;
        case 'AGAA07B':
          this.graphImgSrc = this.graphImg[6];
          this.leftGraphImg = 'assets/images/GraphBs/AGAA07B/CapacityLitrespersec-Page19.png';
          this.rightGraphImg = 'assets/images/GraphBs/AGAA07B/AbsorbedPowerkW-Page19.png';
          break;
        case 'AGAA01A':
          this.graphImgSrc = this.graphImg[7];
          this.leftGraphImg = 'assets/images/GraphBs/AGAA01A/CapacityLitrespersec-Page12.png';
          this.rightGraphImg = 'assets/images/GraphBs/AGAA01A/AbsorbedPowerkW-Page12.png';
          break;
        default:
          this.graphImgSrc = this.graphImg[0];
      }
    }
    else if (index === 2) {
      switch (motorModel) {
        case 'AGAA01B':
          this.graphImgSrc1 = this.graphImg1[0];
          break;
        case 'AGAA03A':
          this.graphImgSrc1 = this.graphImg1[1];
          break;
        case 'AGAA03B':
          this.graphImgSrc1 = this.graphImg1[2];
          break;
        case 'AGAA05A':
          this.graphImgSrc1 = this.graphImg1[3];
          break;
        case 'AGAA05B':
          this.graphImgSrc1 = this.graphImg1[4];
          break;
        case 'AGAA07A':
          this.graphImgSrc1 = this.graphImg1[5];
          break;
        case 'AGAA07B':
          this.graphImgSrc1 = this.graphImg1[6];
          break;
        case 'AGAA01A':
          this.graphImgSrc1 = this.graphImg1[7];
          break;
        default:
          this.graphImgSrc1 = this.graphImg1[0];
      }
    }
    if (index === 3) {
      switch (motorModel) {
        case 'DCAA041':
          this.graphImgSrc = this.graphImg[1];
          break;
        case 'DCAA051':
          this.graphImgSrc = this.graphImg[0];
          break;
        case 'DCAC012':
          this.graphImgSrc = this.graphImg[2];
          break;
        case 'DCAC022':
          this.graphImgSrc = this.graphImg[3];
          break;
        case 'DCAC032':
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
      this.graphImgSrc = 'assets/images/SABS/AGAA.jpg';
    }
    else if (index === 2) {
      this.btn6Active = '';
      this.graphImgSrc1 = 'assets/images/SABS/AGAA.jpg';
    }
    else if (index === 3) {
      this.btn4Active = '';
      this.graphImgSrc = 'assets/images/MpGraph/Frame21.png';
    }
  }

  getIndex(eachTable): void {
    // console.log(eachTable, 'table')
  }

  navigateToProductDetails(eachData): void {
    const speedData = eachData.pump_speed.split(" - ");
    const pole = speedData[1].substring(0, 1);
    this.router.navigate(['../', this.parentId, this.motorModel, pole],
      { relativeTo: this.activatedRoute, queryParams: { index: 0, id: eachData.id, driveType: this.driveType != '' ? this.driveType : null } });
  }

  // function to show motorDetails.
  showMotor(motorType: string, motorPole: any): void {
    this.motorModel = motorType;
    this.motorPole = motorPole;
    this.getTableData(motorType);
    if (this.router.url.includes('surfaceAgriPumps')) {
      this.toggleDisplaySurfaceAgri = true;
      this.showMotorDisplay = true;
      switch (motorType) {
        case 'AGAA01B':
          this.leftGraphImg = 'assets/images/GraphBs/AGAA01B/CapacityLitrespersec-Page13copy.png';
          this.rightGraphImg = 'assets/images/GraphBs/AGAA01B/AbsorbedPowerkW-Page13copy.png';
          break;
        case 'AGAA03A':
          this.leftGraphImg = 'assets/images/GraphBs/AGAA03A/CapacityLitrespersec-Page14copy.png';
          this.rightGraphImg = 'assets/images/GraphBs/AGAA03A/AbsorbedPowerkW-Page14copy.png';
          break;
        case 'AGAA03B':
          this.leftGraphImg = 'assets/images/GraphBs/AGAA03B/CapacityLitrespersec-Page15copy.png';
          this.rightGraphImg = 'assets/images/GraphBs/AGAA03B/AbsorbedPowerkW-Page15copy.png';
          break;
        case 'AGAA05A':
          this.leftGraphImg = 'assets/images/GraphBs/AGAA05A/CapacityLitrespersec-Page16copy.png';
          this.rightGraphImg = 'assets/images/GraphBs/AGAA05A/AbsorbedPowerkW-Page16copy.png';
          break;
        case 'AGAA05B':
          this.leftGraphImg = 'assets/images/GraphBs/AGAA05B/CapacityLitrespersec-Page17copy.png';
          this.rightGraphImg = 'assets/images/GraphBs/AGAA05B/AbsorbedPowerkW-Page17copy.png';
          break;
        case 'AGAA07A':
          this.leftGraphImg = 'assets/images/GraphBs/AGAA07A/CapacityLitrespersec-Page18copy.png';
          this.rightGraphImg = 'assets/images/GraphBs/AGAA07A/AbsorbedPowerkW-Page18copy.png';
          break;
        case 'AGAA07B':
          this.leftGraphImg = 'assets/images/GraphBs/AGAA07B/CapacityLitrespersec-Page19copy.png';
          this.rightGraphImg = 'assets/images/GraphBs/AGAA07B/AbsorbedPowerkW-Page19copy.png';
          break;
        case 'AGAA01A':
          this.leftGraphImg = 'assets/images/GraphBs/AGAA01A/CapacityLitrespersecPage12copy.png';
          this.rightGraphImg = 'assets/images/GraphBs/AGAA01A/AbsorbedPowerWPage12copy.png';
          break;
        default:
          this.leftGraphImg = 'assets/images/GraphBs/AGAA01A/CapacityLitrespersec-Page12copy.png';
          this.rightGraphImg = 'assets/images/GraphBs/AGAA01A/AbsorbedPowerkW-Page12copy.png';
      }
    }
    else if (this.router.url.includes('multiPurposePumps')) {
      this.toggleDisplayMultipurpose = true;
      this.showMotorDisplay = true;
      switch (motorType) {
        case 'DCAC051':
          this.leftGraphImg = 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC051.jpg';
          break;
        case 'DCAC041':
          this.leftGraphImg = 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC041.jpg';
          break;
        case 'DCCC012':
          this.leftGraphImg = 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC012.jpg';
          break;
        case 'DCCC022':
          this.leftGraphImg = 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC022.jpg';
          break;
        case 'DCCC032':
          this.leftGraphImg = 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC032.jpg';
          break;
        default:
          this.leftGraphImg = 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC012.jpg';
      }
    }
  }

  getTableData(motorType): void {
    this.apiService.tableList(motorType).subscribe(res => {
      if (res[`code`] === 200) {
        this.motorData = res[`bareshaft`];
        this.tableHead = [];
        if (this.motorData.length > 0) {
          this.motorData.forEach(eachMotor => {
            if (eachMotor['0']?.length || eachMotor['0'] !== null) {
              eachMotor['0'] = eachMotor['0'].split(',');
            }
            if (eachMotor['10']?.length || eachMotor['10'] !== null) {
              eachMotor['10'] = eachMotor['10'].split(',');
            }
            if (eachMotor['20']?.length || eachMotor['20'] !== null) {
              eachMotor['20'] = eachMotor['20'].split(',');
            }
            if (eachMotor['30']?.length || eachMotor['30'] !== null) {
              eachMotor['30'] = eachMotor['30'].split(',');
            }
            if (eachMotor['40']?.length || eachMotor['40'] !== null) {
              eachMotor['40'] = eachMotor['40'].split(',');
            }
            if (eachMotor['50']?.length || eachMotor['50'] !== null) {
              eachMotor['50'] = eachMotor['50'].split(',');
            }
            if (eachMotor['60']?.length || eachMotor['60'] !== null) {
              eachMotor['60'] = eachMotor['60'].split(',');
            }
            if (eachMotor['80']?.length || eachMotor['80'] !== null) {
              eachMotor['80'] = eachMotor['80'].split(',');
            }
          });
          for (const [key, value] of Object.entries<any>(this.motorData[0])) {
            if (key === '0' && value !== null && (value.length > 2 || value.length <= 3)) {
              if (this.router.url.includes('surfaceAgriPumps')) {
                this.tableHead.push({ head: +key, feet: '0 ft' });
              } else {
                this.tableHead.push({ head: +key, feet: '' });
              }
            }
            if (key === '10' && value !== null && (value.length > 3 || value.length > 2)) {
              this.feet = value[3];
              if (this.feet === '35 ft' || this.feet === undefined) {
                this.tableHead.push({ head: +key, feet: value[3] });
              } else {
                this.tableHead.push({ head: +key * 2, feet: value[3] });
              }
            }
            if (key === '20' && value !== null && (value.length > 3 || value.length > 2)) {
              this.feet = value[3];
              if (this.feet === '35 ft' || this.feet === undefined) {
                this.tableHead.push({ head: +key, feet: value[3] });
              } else {
                this.tableHead.push({ head: +key * 2, feet: value[3] });
              }
            }
            if (key === '30' && value !== null && (value.length > 3 || value.length > 2)) {
              this.feet = value[3];
              if (this.feet === '35 ft' || this.feet === undefined) {
                this.tableHead.push({ head: +key, feet: value[3] });
              } else {
                this.tableHead.push({ head: +key * 2, feet: value[3] });
              }
            }
            if (key === '40' && value !== null && (value.length > 3 || value.length > 2)) {
              this.feet = value[3];
              if (this.feet === '35 ft' || this.feet === undefined) {
                this.tableHead.push({ head: +key, feet: value[3] });
              } else {
                this.tableHead.push({ head: +key * 2, feet: value[3] });
              }
            }
            if (key === '50' && value !== null && (value.length > 3 || value.length > 2)) {
              this.feet = value[3];
              if (this.feet === '35 ft' || this.feet === undefined) {
                this.tableHead.push({ head: +key, feet: value[3] });
              } else {
                this.tableHead.push({ head: +key * 2, feet: value[3] });
              }
            }
            if (key === '60' && value !== null && (value.length > 3 || value.length > 2)) {
              this.feet = value[3];
              if (this.feet === '35 ft' || this.feet === undefined) {
                this.tableHead.push({ head: +key, feet: value[3] });
              } else {
                this.tableHead.push({ head: +key * 2, feet: value[3] });
              }
            }
            if (key === '80' && value !== null && (value.length > 3 || value.length > 2)) {
              this.feet = value[3];
              if (this.feet === '35 ft' || this.feet === undefined) {
                this.tableHead.push({ head: +key, feet: value[3] });
              } else {
                this.tableHead.push({ head: +key * 2, feet: value[3] });
              }
            }
          }
        } else {
          this.msg = 'No data found';
        }
      }
    });
  }

  // function to hide motorDetails
  goBack(): void {
    if (this.router.url.includes('multiPurposePumps')) {
      this.btn4Active = '';
      this.toggleDisplayMultipurpose = false;
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    } else {
      this.btn4Active = '';
      this.toggleDisplaySurfaceAgri = false;
      document.body.scrollTop = document.documentElement.scrollTop = 0;
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
