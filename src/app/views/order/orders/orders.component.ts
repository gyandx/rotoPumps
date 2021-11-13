import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderInfo } from 'src/app/dataModels/order-info';
import { ApiService } from 'src/app/services/api.service';
import { jsPDF } from "jspdf";
import 'jspdf-autotable';
import { ToastrService } from 'ngx-toastr';
// import { ProductDetails } from 'src/app/dataModels/product-details';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {

  myFileName: string;
  fileUrl: string;
  orderId: string; // used to store orderId
  orderData: OrderInfo = new OrderInfo(); // used to store orderDetails of OrderInfo type
  downloadData = [];
  pumpType = [];
  productCarousalImages = [];
  productsDetail = []; // to store product details.
  dataSheetData = [];
  productImages: string;
  pumpSpeedInRpm: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private apiService: ApiService, private toaster: ToastrService) { }

  ngOnInit(): void {
    // getting orderId from routeQueryParams
    this.activatedRoute.queryParams.subscribe(res => {
      if (res[`orderId`]) {
        this.orderId = res[`orderId`];
        this.getOrderDetails(this.orderId);
      }
    });
  }

  // function to get OrderDetails by using orderId
  getOrderDetails(orderId: string): void {
    const orderData = {
      order_id: +orderId
    };
    this.apiService.orderDetailsById(orderData).subscribe(res => {
      if (res[`code`] === 200) {
        let pumpModel;
        this.orderData = res[`orders`];
        if (this.orderData.order_details.length) {
          this.orderData.order_details.forEach(element => {
            if (element.description === null) {
              pumpModel = [];
            } else {
              pumpModel = element.description.split(" ");
            }
            // console.log(pumpModel, 'pumpModel', element);
            if (pumpModel[0] === 'Surface' && (pumpModel[2] === 'Close' || pumpModel[2] === 'Bare')) {
              element[`img`] = 'assets/images/AGCACC/AGCApumpcopy.png';
              // this.productImages = 'assets/images/banner/SAP-AG-Home.jpg';
            } else if (pumpModel[0] === 'Multipurpose' && (pumpModel[1] === 'Close' || pumpModel[1] === 'Bare')) {
              element[`img`] = 'assets/images/banner/DC.png';
              // this.productImages = 'assets/images/banner/DC.png';
            } else if (element.type === 2 || element.type === 3) {
              switch (element.code) {
                case 'Baseplate':
                  element[`img`] = 'assets/images/SparesImg/Baseplate_pic.png';
                  break;
                case 'DRP':
                  element[`img`] = 'assets/images/SparesImg/DRP_pic.png';
                  break;
                case 'Rotor':
                  element[`img`] = 'assets/images/SparesImg/rotor.jpg';
                  break;
                case 'Stator':
                  element[`img`] = 'assets/images/icons/stator.png';
                  break;
                case 'Mech Seal':
                  element[`img`] = 'assets/images/SparesImg/Mech_seal.jpeg';
                  break;
                case 'UJ M Kit':
                  element[`img`] = 'assets/images/SparesImg/UJ_KIT.jpg';
                  break;
                case 'Pump Lantern':
                  element[`img`] = 'assets/images/SparesImg/PUMPLANTERN.BMP';
                  break;
                case 'Foot':
                  element[`img`] = 'assets/images/SparesImg/FOOT.BMP';
                  break;
                case 'Tie Rod':
                  element[`img`] = 'assets/images/SparesImg/TIEROD.BMP';
                  break;
                case 'Pump Housing':
                  element[`img`] = 'assets/images/SparesImg/PUMPHOUSING.BMP';
                  break;
                case 'End Cover':
                  element[`img`] = 'assets/images/SparesImg/END_COVER.BMP';
                  break;
                case 'Seal Plate':
                  element[`img`] = 'assets/images/SparesImg/SEAL_PLATE.BMP';
                  break;
                case 'Mech Seal Housing':
                  element[`img`] = 'assets/images/SparesImg/MECHSEALHOUSING.BMP';
                  break;
                case 'Shaft Stub Price':
                  element[`img`] = 'assets/images/SparesImg/SHAFT.BMP';
                  break;
                case 'Coupling Rod':
                  element[`img`] = 'assets/images/SparesImg/COUPLINGROD.BMP';
                  break;
                case 'B.S.R. Retaining Ring':
                  element[`img`] = 'assets/images/SparesImg/BOOTSEALRETAINER.BMP'; // will change
                  break;
                case 'Boot Seal Reatainer':
                  element[`img`] = 'assets/images/SparesImg/BOOTSEALRETAINER.BMP';
                  break;
                case 'Boot Seal Support Ring':
                  element[`img`] = 'assets/images/SparesImg/Boot_Seal_Support_Ring.bmp';
                  break;
                case 'Boot Seal':
                  element[`img`] = 'assets/images/SparesImg/BOOT_SEAL.BMP';
                  break;
                case 'Foot And Face Mounted Motor 240v 4Pole':
                  element[`img`] = 'assets/images/SparesImg/Foot_face_mounted_motor.jpg';
                  break;
                case 'Foot And Face Mounted Motor 240v 6Pole':
                  element[`img`] = 'assets/images/SparesImg/Foot_face_mounted_motor.jpg';
                  break;
                case 'Bearing Cover':
                  element[`img`] = 'assets/images/SparesImg/BEARINGCOVER.BMP';
                  break;
                case 'Bearing Spacer External':
                  element[`img`] = 'assets/images/SparesImg/BEARINGSPACER.BMP';
                  break;
                case 'Mechanical Seal':
                  element[`img`] = 'assets/images/SparesImg/Mechanical-Seal_image.jpg';
                  break;
                case 'Ball_Bearing':
                  element[`img`] = 'assets/images/SparesImg/BALLBEARING.BMP';
                  break;
                case 'Foot Support For Stator Housing':
                  element[`img`] = 'assets/images/SparesImg/FOOT_FOR_STATOR_HOUSING.BMP';
                  break;
                case 'Foot Support For Bearing Housing':
                  element[`img`] = 'assets/images/SparesImg/FOOTFORBEARINGHOUSING.BMP';
                  break;
                case 'Stator Housing':
                  element[`img`] = 'assets/images/SparesImg/STATORHOUSING.BMP';
                  break;
                case 'Bonded Bush':
                  element[`img`] = 'assets/images/SparesImg/BONDEDBUSH.BMP';
                  break;
                case 'Bearning Housing':
                  element[`img`] = 'assets/images/SparesImg/BEARINGHOUSING.BMP';
                  break;
                case 'Ball Bearing Small':
                  element[`img`] = 'assets/images/SparesImg/BALLBEARING.BMP'; // will change
                  break;
                case 'Ball Bearing Large':
                  element[`img`] = 'assets/images/SparesImg/BALLBEARING.BMP'; // will change
                  break;
                case 'Mech Seal Retainer':
                  element[`img`] = 'assets/images/SparesImg/MECHANICHALSEALRETAINER.BMP';
                  break;
                case 'Stator Support Ring':
                  element[`img`] = 'assets/images/SparesImg/STATOR_SUPPORT_RING.jpg';
                  break;
                case 'Drive Shaft':
                  element[`img`] = 'assets/images/SparesImg/SHAFT.BMP.BMP';
                  break;
                case 'Abutment Ring':
                  element[`img`] = 'assets/images/SparesImg/ABUTMENT_RING.jpg';
                  break;
                case 'Bearing':
                  element[`img`] = 'assets/images/SparesImg/BALLBEARING.BMP'; // will change
                  break;
                default:
                  element[`img`] = 'assets/images/icons/accessories2.png';
              }
              // this.productImages = 'assets/images/icons/accessories.png';
            }
          });
          this.getOrderDownloadData(this.orderData.order_details);
        }
      }

    });
  }

  getOrderDownloadData(orderData): void {
    this.downloadData = orderData.filter((eachData) => eachData.type == 1);
    // console.log(this.downloadData, 'data')
  }

  splitPumpType(pumpModel, driveType?: string, imgType?: string): void {
    let speed = '';
    this.pumpType = pumpModel.split(" ");
    if (driveType !== undefined && this.pumpType[0] === 'Multipurpose' && this.pumpType[1] === 'Bare') {
      console.log('myDrive')
      // const model = this.pumpType[0] === 'Surface' ? this.pumpType[5] : this.pumpType[4];
      const model = this.pumpType[4];
      this.apiService.dataDriveTypes(model, driveType).subscribe(res => {
        if (res[`code`] === 200) {
          if (res[`product`].length) {
            speed = (res[`product`][0]?.details?.speed).toString();
            console.log('speed', speed);
            if (this.pumpType[0] === 'Multipurpose' && this.pumpType[1] === 'Bare') {
              this.productCarousalImages = [
                { img: 'assets/images/banner/DC.png', name: 'Model', alt: 'Image Required', heading: '' },
              ];
              if (this.pumpType[4] === 'DCAC012' || this.pumpType[4] === 'DCAC022' || this.pumpType[4] === 'DCAC032') {
                this.productCarousalImages.push(
                  {
                    img: 'assets/images/Multipurpose_GACW/GA BARESHAFT AND CLOSE COUPLED DC 012 022 032.jpg',
                    name: 'GA DWG', alt: 'Image Required', heading: 'General Arrangement Drawing'
                  },
                  { img: 'assets/images/Multipurpose_GACW/CS DCAC BARESHAFT 012 022 032.jpg', name: 'CS DWG', alt: 'CS DWG', heading: 'Cross Sectional Drawing' }
                );
              } else if (this.pumpType[4] === 'DCAA041' || this.pumpType[4] === 'DCAA051') {
                this.productCarousalImages.push(
                  {
                    img: 'assets/images/Multipurpose_GACW/GA BARESHAFT AND CLOSE COUPLED DC 41 51.jpg',
                    name: 'CS DWG', alt: 'Image Required', heading: 'General Arrangement Drawing'
                  },
                  {
                    img: 'assets/images/Multipurpose_GACW/CS DCAA BARESHAFT 041 051.jpg',
                    name: 'CS DWG', alt: 'Image Required', heading: 'Cross Sectional Drawing'
                  }
                );
              }

              if (this.pumpType[4] === 'DCAC012' && speed === '800') {
                this.productCarousalImages.push({
                  img: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC012/DC_012_800RPM.jpg',
                  name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
                });
              }
              else if (this.pumpType[4] === 'DCAC012' && speed === '960') {
                this.productCarousalImages.push({
                  img: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC012/DC_012_960RPM.jpg',
                  name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
                });
              }
              else if (this.pumpType[4] === 'DCAC012' && speed === '1200') {
                this.productCarousalImages.push({
                  img: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC012/DC_012_1200RPM.jpg',
                  name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
                });
              }
              else if (this.pumpType[4] === 'DCAC012' && speed === '1450') {
                this.productCarousalImages.push({
                  img: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC012/DC_012_1450RPM.jpg',
                  name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
                });
              }
              else if (this.pumpType[4] === 'DCAC022' && speed === '800') {
                this.productCarousalImages.push({
                  img: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC022/DC_022_800RPM.jpg',
                  name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
                });
              }
              else if (this.pumpType[4] === 'DCAC022' && speed === '960') {
                this.productCarousalImages.push({
                  img: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC022/DC_022_960RPM.jpg',
                  name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
                });
              }
              else if (this.pumpType[4] === 'DCAC022' && speed === '1200') {
                this.productCarousalImages.push({
                  img: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC022/DC_022_1200RPM.jpg',
                  name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
                });
              }
              else if (this.pumpType[4] === 'DCAC022' && speed === '1450') {
                this.productCarousalImages.push({
                  img: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC022/DC_022_1450RPM.jpg',
                  name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
                });
              }
              else if (this.pumpType[4] === 'DCAC032' && speed === '800') {
                this.productCarousalImages.push({
                  img: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC032/DC_032_800RPM.jpg',
                  name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
                });
              }
              else if (this.pumpType[4] === 'DCAC032' && speed === '960') {
                this.productCarousalImages.push({
                  img: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC032/DC_032_960RPM.jpg',
                  name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
                });
              }
              else if (this.pumpType[4] === 'DCAC032' && speed === '1200') {
                this.productCarousalImages.push({
                  img: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC032/DC_032_1200RPM.jpg',
                  name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
                });
              }
              else if (this.pumpType[4] === 'DCAC032' && speed === '1450') {
                this.productCarousalImages.push({
                  img: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC032/DC_032_1450RPM.jpg',
                  name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
                });
              }
              else if (this.pumpType[4] === 'DCAA041' && speed === '800') {
                this.productCarousalImages.push({
                  img: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC041/DC_041_800RPM.jpg',
                  name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
                });
              }
              else if (this.pumpType[4] === 'DCAA041' && speed === '960') {
                this.productCarousalImages.push({
                  img: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC041/DC_041_960RPM.jpg',
                  name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
                });
              }
              else if (this.pumpType[4] === 'DCAA041' && speed === '1200') {
                this.productCarousalImages.push({
                  img: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC041/DC_041_1200RPM.jpg',
                  name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
                });
              }
              else if (this.pumpType[4] === 'DCAA041' && speed === '1450') {
                this.productCarousalImages.push({
                  img: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC041/DC_041_1450RPM.jpg',
                  name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
                });
              }
              else if (this.pumpType[4] === 'DCAA051' && speed === '800') {
                this.productCarousalImages.push({
                  img: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC051/DC_051_800RPM.jpg',
                  name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
                });
              }
              else if (this.pumpType[4] === 'DCAA051' && speed === '960') {
                this.productCarousalImages.push({
                  img: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC051/DC_051_960RPM.jpg',
                  name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
                });
              }
              else if (this.pumpType[4] === 'DCAA051' && speed === '1200') {
                this.productCarousalImages.push({
                  img: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC051/DC_051_1200RPM.jpg',
                  name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
                });
              }
              else if (this.pumpType[4] === 'DCAA051' && speed === '1450') {
                this.productCarousalImages.push({
                  img: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC051/DC_051_1450RPM.jpg',
                  name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
                });
              }
            }
          }
          this.getBase64ImageFromUrl('http://localhost:4200/' + this.productCarousalImages[3].img)
            .then(result => {
              const imgResult = result;
              this.pdfConversion(imgResult, this.productCarousalImages[3].heading, this.productCarousalImages[3].name);
            })
            // .catch(err => this.toaster.error(`Download Failed`));
            .catch(err => this.pdfConversion('assets/images/icons/No-Image-Found.png',
              this.productCarousalImages[3].heading, this.productCarousalImages[3].name));
        }
      });
    }
    if (this.pumpType.length) {
      // console.log('close couple surface')
      if (this.pumpType[0] === 'Surface' && this.pumpType[2] === 'Close') {
        this.productCarousalImages = [
          {
            img: 'assets/images/AGCACC/AGCApumpcopy.png', name: 'MODEL', alt: 'Image Required',
            heading: ''
          },
          {
            img: 'assets/images/AGCACC/AGCAGA1.png', name: 'GA DWG',
            alt: 'GA DWG', heading: 'GENERAL ARRANGEMENT DRAWING OF AGCA SERIES PUMP'
          },
          {
            img: 'assets/images/AGCACC/AGCASeriespump1.png', name: 'CS DWG',
            alt: 'CS DWG', heading: 'CROSS SECTIONAL DRAWING OF AGCA SERIES PUMP'
          },
          {
            img: 'assets/images/AGCACC/curve1copy.png', name: 'PERFORMANCE CURVE', alt: 'PERFORMANCE CURVE',
            heading: 'PERFORMANCE CURVE'
          }
        ];
      }
      else if (this.pumpType[0] === 'Surface' && this.pumpType[2] === 'Bare') {
        // console.log('bare shaft surface');
        this.productCarousalImages = [
          { img: 'assets/images/AGAABS/Agaapumpcopy.png', name: 'MODEL', alt: '', heading: '' },
          {
            img: 'assets/images/AGAABS/AGAAGADWG1.png', name: 'GA DWG',
            alt: 'GA DWG', heading: 'GENERAL ARRANGEMENT DRAWING OF AGAA SERIES PUMP'
          },
          {
            img: 'assets/images/AGAABS/AGAACS1.png', name: 'CA DWG',
            alt: 'CA DWG', heading: 'CROSS SECTIONAL DRAWING OF AGAA SERIES PUMP'
          },
        ];
        if (this.downloadData[0].code === 'AGAA01A' && this.downloadData[0].pole === '4 pole') {
          this.productCarousalImages.push({ img: 'assets/images/AGAABS/AGCA1A4POLE1450RPMPERCURVE.png', name: 'PERFORMANCE CURVE', alt: 'PERFORMANCE CURVE', heading: 'Performance Curve' });
        } else if (this.downloadData[0].code === 'AGAA01A' && this.downloadData[0].pole === '6 pole') {
          this.productCarousalImages.push({ img: 'assets/images/AGAABS/AGCA1A6POLE960RPMPERCURVE.png', name: 'PERFORMANCE CURVE', alt: 'PERFORMANCE CURVE', heading: 'Performance Curve' });
        } else if (this.downloadData[0].code === 'AGAA01B' && this.downloadData[0].pole === '4 pole') {
          this.productCarousalImages.push({ img: 'assets/images/AGAABS/AGCA1B4POLE1450RPMPERCURVE.png', name: 'PERFORMANCE CURVE', alt: 'PERFORMANCE CURVE', heading: 'Performance Curve' });
        } else if (this.downloadData[0].code === 'AGAA01B' && this.downloadData[0].pole === '6 pole') {
          this.productCarousalImages.push({ img: 'assets/images/AGAABS/AGCA1B6POLE960RPMPERCURVE.png', name: 'PERFORMANCE CURVE', alt: 'PERFORMANCE CURVE', heading: 'Performance Curve' });
        } else if (this.downloadData[0].code === 'AGAA03A' && this.downloadData[0].pole === '4 pole') {
          this.productCarousalImages.push({ img: 'assets/images/AGAABS/AGCA3A4POLE1450RPMPERCURVE.png', name: 'PERFORMANCE CURVE', alt: 'PERFORMANCE CURVE', heading: 'Performance Curve' });
        } else if (this.downloadData[0].code === 'AGAA03A' && this.downloadData[0].pole === '6 pole') {
          this.productCarousalImages.push({
            img: 'assets/images/icons/No-Image-Found.png',
            name: 'PERFORMANCE CURVE', alt: 'Img Required', heading: 'Performance Curve'
          });
        }
        else if (this.downloadData[0].code === 'AGAA03B' && this.downloadData[0].pole === '4 pole') {
          this.productCarousalImages.push({ img: 'assets/images/AGAABS/AGCA3B6POLE960RPMPERCURVE.png', name: 'PERFORMANCE CURVE', alt: 'PERFORMANCE CURVE', heading: 'Performance Curve' });
        } else if (this.downloadData[0].code === 'AGAA03B' && this.downloadData[0].pole === '6 pole') {
          this.productCarousalImages.push({
            img: 'assets/images/icons/No-Image-Found.png',
            name: 'PERFORMANCE CURVE', alt: 'Img Required', heading: 'Performance Curve'
          });
        }
        else if (this.downloadData[0].code === 'AGAA05A' && this.downloadData[0].pole === '4 pole') {
          this.productCarousalImages.push({ img: 'assets/images/AGAABS/AGCA5A4POLE1450RPMPERCURVE1.png', name: 'PERFORMANCE CURVE', alt: 'PERFORMANCE CURVE', heading: 'Performance Curve' });
        } else if (this.downloadData[0].code === 'AGAA05B' && this.downloadData[0].pole === '6 pole') {
          this.productCarousalImages.push({ img: 'assets/images/AGAABS/AGCA5B6POLE960RPMPERCURVE.png', name: 'PERFORMANCE CURVE', alt: 'PERFORMANCE CURVE', heading: 'Performance Curve' });
        } else if (this.downloadData[0].code === 'AGAA07A' && this.downloadData[0].pole === '4 pole') {
          this.productCarousalImages.push({
            img: 'assets/images/icons/No-Image-Found.png',
            name: 'PERFORMANCE CURVE', alt: 'Img Required', heading: 'Performance Curve'
          });
        } else if (this.downloadData[0].code === 'AGAA07A' && this.downloadData[0].pole === '6 pole') {
          this.productCarousalImages.push({
            img: 'assets/images/icons/No-Image-Found.png',
            name: 'PERFORMANCE CURVE', alt: 'Img Required', heading: 'Performance Curve'
          });
        } else if (this.downloadData[0].code === 'AGAA07B' && this.downloadData[0].pole === '6 pole') {
          this.productCarousalImages.push({
            img: 'assets/images/icons/No-Image-Found.png',
            name: 'PERFORMANCE CURVE', alt: 'Img Required', heading: 'Performance Curve'
          });
        } else if (this.downloadData[0].code === 'AGAA07B' && this.downloadData[0].pole === '4 pole') {
          this.productCarousalImages.push({
            img: 'assets/images/icons/No-Image-Found.png',
            name: 'PERFORMANCE CURVE', alt: 'Img Required', heading: 'Performance Curve'
          });
        }
      }
      else if (this.pumpType[0] === 'Multipurpose' && this.pumpType[1] === 'Close') {
        this.productCarousalImages = [
          { img: 'assets/images/banner/DC.png', name: 'MODEL', alt: 'Image Required', heading: '' }
        ];
        if (this.pumpType[4] === 'DCCC012' || this.pumpType[4] === 'DCCC022' || this.pumpType[4] === 'DCCC032') {
          this.productCarousalImages.push(
            {
              img: 'assets/images/Multipurpose_GACW/GA BARESHAFT AND CLOSE COUPLED DC 012 022 032.jpg',
              name: 'GA DWG', alt: 'Image Required', heading: 'General Arrangement Drawing'
            },
            { img: 'assets/images/Multipurpose_GACW/CS DCAC BARESHAFT 012 022 032.jpg', name: 'CS DWG', alt: 'CS DWG', heading: 'Cross Sectional Drawing' }
          );
        } else if (this.pumpType[4] === 'DCCA041' || this.pumpType[4] === 'DCAC051') {
          this.productCarousalImages.push(
            {
              img: 'assets/images/Multipurpose_GACW/GA BARESHAFT AND CLOSE COUPLED DC 41 51.jpg',
              name: 'GA DWG', alt: 'Image Required', heading: 'General Arrangement Drawing'
            },
            {
              img: 'assets/images/Multipurpose_GACW/CS DCAA BARESHAFT 041 051.jpg', name: 'CS DWG',
              alt: 'CS DWG', heading: 'Cross Sectional Drawing'
            }
          );
        }

        if (this.pumpType[4] === 'DCCA041') {
          this.productCarousalImages.push(
            {
              img: 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC041.jpg',
              name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
            }
          );
        } else if (this.pumpType[4] === 'DCAC051') {
          this.productCarousalImages.push(
            {
              img: 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC051.jpg',
              name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
            }
          );
        } else if (this.pumpType[4] === 'DCCC012') {
          this.productCarousalImages.push(
            {
              img: 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC012.jpg',
              name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
            }
          );
        } else if (this.pumpType[4] === 'DCCC022') {
          this.productCarousalImages.push(
            {
              img: 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC022.jpg',
              name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
            }
          );
        } else if (this.pumpType[4] === 'DCCC032') {
          this.productCarousalImages.push(
            {
              img: 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC032.jpg',
              name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
            }
          );
        }
      }
      if (imgType !== 'Ga' && imgType !== 'Cs' && imgType !== 'Ds'){
        // console.log(this.productCarousalImages, 'caro')
        // this.getBase64ImageFromUrl('http://localhost:4200/' + this.productCarousalImages[3].img)
        this.getBase64ImageFromUrl('https://eshop.rotopumps.com.au/' + this.productCarousalImages[3].img)
        .then(result => {
          let imgResult = result;
          // console.log(imgResult, 'imgRes');
          this.pdfConversion(imgResult, this.productCarousalImages[3].heading, this.productCarousalImages[3].name);
        })
        // .catch(err => this.toaster.error(`Download Failed`));
        .catch(err => this.pdfConversion('assets/images/icons/No-Image-Found.png',
          this.productCarousalImages[3].heading, this.productCarousalImages[3].name));
      }
    }
  }

  pdfConversion(imgResult, imgHeading, imgName): void {
    const doc = new jsPDF('p', 'mm', 'a4');
    const imgData = imgResult;
    const width = doc.internal.pageSize.getWidth();
    doc.setFontSize(15);
    doc.text(imgHeading, width / 2, 20, { align: 'center' });
    // doc.addImage(imgData, 'JPG', 15, 40, 180, 160);
    doc.addImage(imgData, 'PNG', 0, 25, 210, 150);
    doc.save(imgName);
  }

  downloadGa(description) {
    let data;
    let imgResult;
    if (this.downloadData.length) {
      data = this.downloadData.filter(eachData => eachData.description === description);
      this.splitPumpType(data[0].description, undefined, 'Ga');
      // console.log(this.productCarousalImages, 'hhh')
      // this.getBase64ImageFromUrl('http://localhost:4200/' + this.productCarousalImages[1].img)
      this.getBase64ImageFromUrl('https://eshop.rotopumps.com.au/' + this.productCarousalImages[1].img)
        .then(result => {
          imgResult = result;
          this.pdfConversion(imgResult, this.productCarousalImages[1].heading, this.productCarousalImages[1].name);
        })
        // .catch(err => this.toaster.error(`Download Failed`));
        .catch(err => this.pdfConversion('assets/images/icons/No-Image-Found.png',
          this.productCarousalImages[1].heading, this.productCarousalImages[1].name));
    }
  }

  downloadCs(description) {
    let data;
    let imgResult;
    if (this.downloadData.length) {
      data = this.downloadData.filter(eachData => eachData.description === description);
      this.splitPumpType(data[0].description, undefined, 'Cs');
      // console.log(this.productCarousalImages, 'hhh')
      // this.getBase64ImageFromUrl('http://localhost:4200/' + this.productCarousalImages[2].img)
      this.getBase64ImageFromUrl('https://eshop.rotopumps.com.au/' + this.productCarousalImages[2].img)
        .then(result => {
          imgResult = result;
          this.pdfConversion(imgResult, this.productCarousalImages[2].heading, this.productCarousalImages[2].name);
        })
        // .catch(err => this.toaster.error(`Download Failed`));
        .catch(err => this.pdfConversion('assets/images/icons/No-Image-Found.png',
          this.productCarousalImages[2].heading, this.productCarousalImages[2].name));
    }
  }

  downloadPc(description, order) {
    let data;
    if (this.downloadData.length) {
      data = this.downloadData.filter(eachData => eachData.description === description);
      if (data[0].description.includes('Multipurpose Close Coupled Pump')) {
        this.splitPumpType(data[0].description);
        // this.getBase64ImageFromUrl('http://localhost:4200/' + this.productCarousalImages[3].img)
        this.getBase64ImageFromUrl('https://eshop.rotopumps.com.au/' + this.productCarousalImages[3].img)
          .then(result => {
            let imgResult = result;
            this.pdfConversion(imgResult, this.productCarousalImages[3].heading, this.productCarousalImages[3].name);
          })
          // .catch(err => this.toaster.error(`Download Failed`));
          .catch(err => this.pdfConversion('assets/images/icons/No-Image-Found.png',
            this.productCarousalImages[3].heading, this.productCarousalImages[3].name));
      } else {
        console.log(data[0].description, order?.driveType, 'abc');
        this.splitPumpType(data[0].description, order?.driveType);
      }
    }
  }

  downloadOM(pumpType): void{
    const model = pumpType.split(" ");
    if (model[0] === 'Surface' && model[2] === 'Bare') {
      this.myFileName = 'bareshaftO&M.pdf';
      this.fileUrl = 'assets/o&m_manual/AGAA_Manual.pdf';
    }
    else if (model[0] === 'Surface' && model[2] === 'Close'){
      this.myFileName = 'closeCoupleO&M.pdf';
      this.fileUrl = 'assets/o&m_manual/AGCA_Manual.pdf';
    }
    else {
      this.myFileName = 'multipurposeO&M.pdf';
      this.fileUrl = 'assets/o&m_manual/DCManual.pdf';
    }
  }

  downloadDataSheet(data): void {
    let driveDesc = 'NA';
    this.dataSheetData = [];
    if (data.drive_desc !== null) {
      driveDesc = data.drive_desc;
    }
    this.splitPumpType(data.description, undefined, 'Ds');
    // console.log('model', this.pumpType);
    if ((this.pumpType[0] === 'Surface' && this.pumpType[2] === 'Bare') ||
      (this.pumpType[0] === 'Surface' && this.pumpType[2] === 'Close') || (this.pumpType[0] === 'Multipurpose' &&
        this.pumpType[1] === 'Bare')) {
      // const pole = data.pole.split(" ");
      const model = this.pumpType[0] === 'Surface' ? this.pumpType[5] : this.pumpType[4];
      this.getProductDetailsByTable(model, data.driveType, data.power);
    } else {
      // console.log('else');
      this.getProductDetails(this.pumpType[4], data.pole);
    }
  }

  getProductDetailsByTable(model, driveType, absPower): void {
    this.apiService.dataDriveTypes(model, driveType).subscribe(res => {
      if (res[`code`] === 200) {
        if (this.pumpType[0] === 'Surface' && this.pumpType[2] === 'Bare') {
          if (res[`product`].length) {
            this.dataSheetData.push(
              { type: 'Model', desc: res[`product`][0]?.details?.description },
              { type: 'Drive Type', desc: driveType },
              { type: 'Flow', desc: res[`product`][0]?.details?.flow + ' LPH' },
              { type: 'Head', desc: res[`product`][0]?.details?.head + ' m' },
              { type: 'Pump Speed', desc: res[`product`][0]?.details?.speed + ' RPM' },
              { type: 'Absorbed Power', desc: absPower },
              { type: 'Drive Description', desc: res[`product`][0]?.details?.drive_desc },
              { type: 'Housing Part', desc: res[`product`][0]?.details?.whp_moc },
              { type: 'Sealing', desc: res[`product`][0]?.details?.sealing },
              { type: 'Rotor', desc: res[`product`][0]?.details?.rotor },
              { type: 'Stator', desc: res[`product`][0]?.details?.stator },
              { type: 'Inlet', desc: res[`product`][0]?.details?.inlet },
              { type: 'Outlet', desc: res[`product`][0]?.details?.outlet }
            );
          }
        } else {
          const flowType = (this.pumpType[0] === 'Surface' && this.pumpType[2] === 'Close') ? ' LPH' : ' LPS';
          if (res[`product`].length) {
            this.dataSheetData.push(
              { type: 'Model', desc: res[`product`][0]?.details?.description },
              { type: 'Drive Type', desc: driveType },
              { type: 'Flow', desc: res[`product`][0]?.details?.flow + flowType },
              { type: 'Head', desc: res[`product`][0]?.details?.head + ' m' },
              { type: 'Pump Speed', desc: res[`product`][0]?.details?.speed + ' RPM' },
              { type: 'Drive Description', desc: res[`product`][0]?.details?.drive_desc },
              { type: 'Housing Part', desc: res[`product`][0]?.details?.whp_moc },
              { type: 'Sealing', desc: res[`product`][0]?.details?.sealing },
              { type: 'Rotor', desc: res[`product`][0]?.details?.rotor },
              { type: 'Stator', desc: res[`product`][0]?.details?.stator },
              { type: 'Inlet', desc: res[`product`][0]?.details?.inlet },
              { type: 'Outlet', desc: res[`product`][0]?.details?.outlet }
            );
          }
        }
        this.createPdf(res[`product`][0]?.details?.description, this.dataSheetData);
      }
    });
  }

  getProductDetails(productId: string, poleType: number): void {
    // console.log(productId, poleType, 'test');
    this.apiService.productById(productId, poleType).subscribe(res => {
      if (res[`code`] === 200) {
        this.productsDetail = res[`product`];
        this.dataSheetData.push(
          { type: 'Model', desc: this.productsDetail[0]?.details?.description },
          // { type: 'Drive Type', desc: this.productsDetail[0]?.driveType },
          { type: 'Flow', desc: this.productsDetail[0]?.details?.flow + ' LPS' },
          { type: 'Head', desc: this.productsDetail[0]?.details?.head + ' m' },
          { type: 'Pump Speed', desc: this.productsDetail[0]?.details?.speed + ' RPM' },
          { type: 'Drive Description', desc: this.productsDetail[0]?.details?.drive_desc },
          { type: 'Housing Part', desc: this.productsDetail[0]?.details?.whp_moc },
          { type: 'Sealing', desc: this.productsDetail[0]?.details?.sealing },
          { type: 'Rotor', desc: this.productsDetail[0]?.details?.rotor },
          { type: 'Stator', desc: this.productsDetail[0]?.details?.stator },
          { type: 'Inlet', desc: this.productsDetail[0]?.details?.inlet },
          { type: 'Outlet', desc: this.productsDetail[0]?.details?.outlet }
        );
        this.createPdf(this.productsDetail[0]?.details?.description, this.dataSheetData);
      } else {
        this.toaster.error('Download Failed');
      }
    });
  }


  createPdf(model: string, data): void {
    const doc = new jsPDF();
    const col = ['Types', 'Details'];
    const row = [];
    if (data.length) {
      data.forEach(element => {
        let temp = [element.type, element.desc];
        row.push(temp);
      });
    }

    // console.log(row, 'row');
    // const width = doc.internal.pageSize.getWidth();
    // const width = doc.internal.pageSize.getWidth();
    // doc.text(, width / 2, 20, {align: 'center'});
    doc.setFontSize(15);
    doc.text('Technical Data Sheet', 70, 10);

    doc.setTextColor(100);

    // (doc as any).autoTable({
    //   body: this.dataSheetData,
    //   theme: 'plain',
    //   didDrawCell: data => {
    //     console.log(data.column.index);
    //   }
    // });
    (doc as any).autoTable(col, row, { margin: { top: 20 }, tableLineColor: 100 });

    // below line for Download PDF document
    doc.save(model + 'datasheet.pdf');
  }


  async getBase64ImageFromUrl(imageUrl) {
    const res = await fetch(imageUrl);
    const blob = await res.blob();

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener("load", function () {
        resolve(reader.result);
      }, false);

      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    });
  }

  // function used to cancel order
  cancelOrder(): void {
    this.router.navigate(['orderHistory/cancelOrder', this.orderId]);
  }


}
