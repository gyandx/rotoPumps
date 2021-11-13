import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartDetails } from 'src/app/dataModels/cart-details';
import { ProductDetails } from 'src/app/dataModels/product-details';
import { ApiService } from 'src/app/services/api.service';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  toggleDropdown: boolean = true;
  driveType: string = '';
  driveDesc: any;
  engineKw: any;
  motorData: string;
  productId: string; // to store productId
  quantityValue: number; // to store quantity value
  grandTotal: number = 0; // default grandTotal
  shippingCharges: number = 0; // default shipping charges value
  finalPrice: number = 0; // default final Price
  carouselIndexVal: number = 0;
  productsDetail: Array<ProductDetails> = new Array<ProductDetails>(); // to store product details.
  dummyImg: string = "assets/images/card-images/surfaceAgri_closedCouple/CrossSectionalDrawing.png";
  productCarousalImages = [];
  selectedProductImg: string; // to store selected product image
  thumbnailImages = []; // to add thumbnail images

  // standardMotorVoltage = this.products.Motor[0];
  standardWarranty: any; // to store product warranty
  selectedProduct: any; // to store  selected product
  cartId: string; // to store cardId
  routerUrl = []; // to store router path

  // productDetails: any;
  enableZoom: boolean = true; // to zoomIn on picture hover of type boolean
  zoomImageSrc: any = ''; // to store zoom in image default is empty string
  accessories = []; // to store accessories
  spares = []; // to store spares
  warranty = []; // to store warranty
  defaultSelectedProductPrice: number; // to store selected product price
  toggleOption: boolean = false; // change display according to pump type
  toggleSelectorDropdown = [];
  toggleMotorOption: boolean = false; // show or hide select dropdown
  toggleMotorDriveOption = []; // show or hide select dropdown for motor or drive
  tableData = []; // store table values
  tableIndex: number;
  tableId: string;
  poleType: string;
  tableValues: [] = [];
  tableInfo = [];
  tableDetails = [];
  emptyAccMsg: string = ''; // empty accessory msg
  emptySpareMsg: string = ''; // empty spare msg
  toggleDetails: boolean = false;
  defaultMsg: string = 'Please select drive type/motor';
  pumpSpeed = [];
  albums: Array<{ src: string, caption: string, thumb: string }> = [];
  toggleDieselEngine: boolean = false;
  gstPrice: number;

  constructor(private activatedRoute: ActivatedRoute, private toaster: ToastrService, private apiService: ApiService,
              private router: Router, private _lightbox: Lightbox) { }

  ngOnInit(): void {
    const routerUrlPath = this.router.url;
    this.routerUrl = routerUrlPath.split('/');
    this.activatedRoute.params.subscribe(res => {
      if (res) {
        // console.log(res, 'query')
        // const tableData = res.parentId.split(',');
        // if (tableData.length > 0){
        //   // console.log(tableData, 'table')
        //   this.tableId = tableData[0]; // get the table id
        //   this.tableIndex = tableData[1];
        // }
        this.productId = res.model; // getting productId from router params
        this.poleType = res.type;
        // this.tableId = res.parentId;
        // console.log('poleType', this.productId, this.poleType);
        this.getProductDetails(this.productId, res.type);
      }
    });
    this.activatedRoute.queryParams.subscribe(res => {
      if (res) {
        this.tableIndex = res[`index`];
        this.tableId = res[`id`];
        // this.getTableData(this.productId, this.poleType, this.tableId);
        // console.log('table', res)
      }
    });
    if ((this.router.url.includes('surfaceAgriPumps') && this.router.url.includes('bareShaftPump'))
      || (this.router.url.includes('multiPurposePumps') && this.router.url.includes('bareShaftPump'))) {
      // console.log('hiiiii')
      this.getTableData(this.productId, this.poleType, this.tableId);
      this.toggleOption = true;
    }
    // else if (this.router.url.includes('multiPurposePumps') && this.router.url.includes('bareShaftPump')) {
    //   this.toggleMotorOption = true;
    // }
    // else {
    //   this.toggleOption = false;
    // }
    if (this.router.url.includes('surfaceAgriPumps') && this.router.url.includes('closedCouplePump')) {
      this.thumbnailImages = [
        { imgSrc: 'assets/images/AGCACC/AGCApumpcopy1.png', name: 'PUMP REVIEW', alt: 'MODEL' },
        {
          imgSrc: 'assets/images/AGCACC/AGCAGA1.png', name: 'GA DWG',
          alt: 'GA DWG', heading: 'General Arrangement Drawing'
        },
        {
          imgSrc: 'assets/images/AGCACC/AGCASeriespump1.png',
          name: 'CS DWG', alt: 'CS DWG', heading: 'Cross Sectional Drawing'
        },
        {
          imgSrc: 'assets/images/AGCACC/curve1copy.png', name: 'Performance Curve',
          alt: 'PERFORMANCE CURVE', heading: 'Performance Curve'
        }
      ];
      this.productCarousalImages = [
        {
          imgSrc: 'assets/images/AGCACC/AGCApumpcopy1.png', name: 'PUMP REVIEW', alt: 'Image Required',
        },
        {
          imgSrc: 'assets/images/AGCACC/AGCAGA1.png', name: 'GA DWG',
          alt: 'GA DWG', heading: 'General Arrangement Drawing'
        },
        {
          imgSrc: 'assets/images/AGCACC/AGCASeriespump1.png', name: 'CS DWG',
          alt: 'CS DWG', heading: 'Cross Sectional Drawing'
        },
        {
          imgSrc: 'assets/images/AGCACC/curve1copy.png', name: 'PERFORMANCE CURVE', alt: 'Performance Curve',
          heading: 'Performance Curve'
        }
      ];
      for (let i = 0; i < this.thumbnailImages.length; i++) {
        const src = this.thumbnailImages[i].imgSrc;
        const caption = 'Image ' + this.thumbnailImages[i].alt;
        const thumb = this.thumbnailImages[i].imgSrc;
        const album = {
          src: src,
          caption: caption,
          thumb: thumb
        };

        this.albums.push(album);
      }
    }

    if (this.router.url.includes('multiPurposePumps') && this.router.url.includes('closedCouplePump')) {
      this.thumbnailImages = [
        { imgSrc: 'assets/images/banner/DC.png', name: 'PUMP REVIEW', alt: 'Image Required', heading: '' }
      ];
      this.productCarousalImages = [
        { imgSrc: 'assets/images/banner/DC.png', name: 'PUMP REVIEW', alt: 'Image Required', heading: '' },
      ];

      if (this.productId === 'DCCC012' || this.productId === 'DCCC022' || this.productId === 'DCCC032') {
        this.thumbnailImages.push(
          {
            imgSrc: 'assets/images/Multipurpose_GACW/GA BARESHAFT AND CLOSE COUPLED DC 012 022 032.jpg',
            name: 'GA DWG', alt: 'Image Required', heading: 'General Arrangement Drawing'
          },
          { imgSrc: 'assets/images/Multipurpose_GACW/CS DCAC BARESHAFT 012 022 032.jpg', name: 'CS DWG', alt: 'CS DWG', heading: 'Cross Sectional Drawing' }
        );
        this.productCarousalImages.push(
          {
            imgSrc: 'assets/images/Multipurpose_GACW/GA BARESHAFT AND CLOSE COUPLED DC 012 022 032.jpg',
            name: 'GA DWG', alt: 'Image Required', heading: 'General Arrangement Drawing'
          },
          { imgSrc: 'assets/images/Multipurpose_GACW/CS DCAC BARESHAFT 012 022 032.jpg', name: 'CS DWG', alt: 'CS DWG', heading: 'Cross Sectional Drawing' },
        );
      } else if (this.productId === 'DCCA041' || this.productId === 'DCAC051') {
        this.thumbnailImages.push(
          {
            imgSrc: 'assets/images/Multipurpose_GACW/GA BARESHAFT AND CLOSE COUPLED DC 41 51.jpg',
            name: 'GA DWG', alt: 'Image Required', heading: 'General Arrangement Drawing'
          },
          {
            imgSrc: 'assets/images/Multipurpose_GACW/CS DCAA BARESHAFT 041 051.jpg', name: 'CS DWG',
            alt: 'CS DWG', heading: 'Cross Sectional Drawing'
          }
        );
        this.productCarousalImages.push(
          {
            imgSrc: 'assets/images/Multipurpose_GACW/GA BARESHAFT AND CLOSE COUPLED DC 41 51.jpg',
            name: 'GA DWG', alt: 'Image Required', heading: 'General Arrangement Drawing'
          },
          {
            imgSrc: 'assets/images/Multipurpose_GACW/CS DCAA BARESHAFT 041 051.jpg', name: 'CS DWG',
            alt: 'CS DWG', heading: 'Cross Sectional Drawing'
          }
        );
      }

      if (this.productId === 'DCCA041') {
        this.thumbnailImages.push(
          {
            imgSrc: 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC041.jpg',
            name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
          }
        );
        this.productCarousalImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC041.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
      } else if (this.productId === 'DCAC051') {
        this.thumbnailImages.push(
          {
            imgSrc: 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC051.jpg',
            name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
          }
        );
        this.productCarousalImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC051.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
      } else if (this.productId === 'DCCC012') {
        this.thumbnailImages.push(
          {
            imgSrc: 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC012.jpg',
            name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
          }
        );
        this.productCarousalImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC012.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
      } else if (this.productId === 'DCCC022') {
        this.thumbnailImages.push(
          {
            imgSrc: 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC022.jpg',
            name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
          }
        );
        this.productCarousalImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC022.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
      } else if (this.productId === 'DCCC032') {
        this.thumbnailImages.push(
          {
            imgSrc: 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC032.jpg',
            name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
          }
        );
        this.productCarousalImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC032.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
      }

      for (let i = 0; i < this.thumbnailImages.length; i++) {
        const src = this.thumbnailImages[i].imgSrc;
        const caption = 'Image ' + this.thumbnailImages[i].alt;
        const thumb = this.thumbnailImages[i].imgSrc;
        const album = {
          src: src,
          caption: caption,
          thumb: thumb
        };

        this.albums.push(album);
      }
    }

    if (this.router.url.includes('surfaceAgriPumps') && this.router.url.includes('bareShaftPump')) {
      this.thumbnailImages = [
        { imgSrc: 'assets/images/AGAABS/Agaapumpcopy-Copy.png', name: 'PUMP REVIEW', alt: '', heading: '' },
        {
          imgSrc: 'assets/images/AGAABS/AGAAGADWG1.png', name: 'GA DWG',
          alt: 'GA DWG', heading: 'General Arrangement Drawing'
        },
        {
          imgSrc: 'assets/images/AGAABS/AGAACS1.png', name: 'CA DWG',
          alt: 'CA DWG', heading: 'Cross Sectional Drawing'
        },
      ];
      this.productCarousalImages = [
        { imgSrc: 'assets/images/AGAABS/Agaapumpcopy-Copy.png', name: 'PUMP REVIEW', alt: '', heading: '' },
        {
          imgSrc: 'assets/images/AGAABS/AGAAGADWG1.png', name: 'GA DWG',
          alt: 'GA DWG', heading: 'General Arrangement Drawing'
        },
        {
          imgSrc: 'assets/images/AGAABS/AGAACS1.png', name: 'CA DWG',
          alt: 'CA DWG', heading: 'Cross Sectional Drawing'
        },
      ];
      // console.log(typeof(this.poleType))
      // console.log(this.productId, this.poleType, 'jjdjfj')
      if (this.productId === 'AGAA01A' && this.poleType === '4') {
        this.thumbnailImages.push({ imgSrc: 'assets/images/AGAABS/AGCA1A4POLE1450RPMPERCURVE1.png', name: 'PERFORMANCE CURVE', alt: 'PERFORMANCE CURVE', heading: 'Performance Curve' });
        this.productCarousalImages.push({ imgSrc: 'assets/images/AGAABS/AGCA1A4POLE1450RPMPERCURVE1.png', name: 'PERFORMANCE CURVE', alt: 'PERFORMANCE CURVE', heading: 'Performance Curve' });
      } else if (this.productId === 'AGAA01A' && this.poleType === '6') {
        this.thumbnailImages.push({ imgSrc: 'assets/images/AGAABS/AGCA1A6POLE960RPMPERCURVE1.png', name: 'PERFORMANCE CURVE', alt: 'PERFORMANCE CURVE', heading: 'Performance Curve' });
        this.productCarousalImages.push({ imgSrc: 'assets/images/AGAABS/AGCA1A6POLE960RPMPERCURVE1.png', name: 'PERFORMANCE CURVE', alt: 'PERFORMANCE CURVE', heading: 'Performance Curve' });
      } else if (this.productId === 'AGAA01B' && this.poleType === '4') {
        this.thumbnailImages.push({ imgSrc: 'assets/images/AGAABS/AGCA1B4POLE1450RPMPERCURVE1.png', name: 'PERFORMANCE CURVE', alt: 'PERFORMANCE CURVE', heading: 'Performance Curve' });
        this.productCarousalImages.push({ imgSrc: 'assets/images/AGAABS/AGCA1B4POLE1450RPMPERCURVE1.png', name: 'PERFORMANCE CURVE', alt: 'PERFORMANCE CURVE', heading: 'Performance Curve' });
      } else if (this.productId === 'AGAA01B' && this.poleType === '6') {
        this.thumbnailImages.push({ imgSrc: 'assets/images/AGAABS/AGCA1B6POLE960RPMPERCURVE1.png', name: 'PERFORMANCE CURVE', alt: 'PERFORMANCE CURVE', heading: 'Performance Curve' });
        this.productCarousalImages.push({ imgSrc: 'assets/images/AGAABS/AGCA1B6POLE960RPMPERCURVE1.png', name: 'PERFORMANCE CURVE', alt: 'PERFORMANCE CURVE', heading: 'Performance Curve' });
      } else if (this.productId === 'AGAA03A' && this.poleType === '4') {
        this.thumbnailImages.push({ imgSrc: 'assets/images/AGAABS/AGCA3A4POLE1450RPMPERCURVE1.png', name: 'PERFORMANCE CURVE', alt: 'PERFORMANCE CURVE', heading: 'Performance Curve' });
        this.productCarousalImages.push({ imgSrc: 'assets/images/AGAABS/AGCA3A4POLE1450RPMPERCURVE1.png', name: 'PERFORMANCE CURVE', alt: 'PERFORMANCE CURVE', heading: 'Performance Curve' });
      } else if (this.productId === 'AGAA03A' && this.poleType === '6') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/icons/No-Image-Found.png',
          name: 'PERFORMANCE CURVE', alt: 'Img Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/icons/No-Image-Found.png',
          name: 'PERFORMANCE CURVE', alt: 'Img Required', heading: 'Performance Curve'
        });
      }
      else if (this.productId === 'AGAA03B' && this.poleType === '4') {
        this.thumbnailImages.push({ imgSrc: 'assets/images/AGAABS/AGCA3B6POLE960RPMPERCURVE1.png', name: 'PERFORMANCE CURVE', alt: 'PERFORMANCE CURVE', heading: 'Performance Curve' });
        this.productCarousalImages.push({ imgSrc: 'assets/images/AGAABS/AGCA3B6POLE960RPMPERCURVE1.png', name: 'PERFORMANCE CURVE', alt: 'PERFORMANCE CURVE', heading: 'Performance Curve' });
      } else if (this.productId === 'AGAA03B' && this.poleType === '6') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/icons/No-Image-Found.png',
          name: 'PERFORMANCE CURVE', alt: 'Img Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/icons/No-Image-Found.png',
          name: 'PERFORMANCE CURVE', alt: 'Img Required', heading: 'Performance Curve'
        });
      }
      else if (this.productId === 'AGAA05A' && this.poleType === '4') {
        this.thumbnailImages.push({ imgSrc: 'assets/images/AGAABS/AGCA5A4POLE1450RPMPERCURVE1.png', name: 'PERFORMANCE CURVE', alt: 'PERFORMANCE CURVE', heading: 'Performance Curve' });
        this.productCarousalImages.push({ imgSrc: 'assets/images/AGAABS/AGCA5A4POLE1450RPMPERCURVE1.png', name: 'PERFORMANCE CURVE', alt: 'PERFORMANCE CURVE', heading: 'Performance Curve' });
      } else if (this.productId === 'AGAA05B' && this.poleType === '6') {
        // console.log("3B", this.productId)
        this.thumbnailImages.push({ imgSrc: 'assets/images/AGAABS/AGCA5B6POLE960RPMPERCURVE1.png', name: 'PERFORMANCE CURVE', alt: 'PERFORMANCE CURVE', heading: 'Performance Curve' });
        this.productCarousalImages.push({ imgSrc: 'assets/images/AGAABS/AGCA5B6POLE960RPMPERCURVE1.png', name: 'PERFORMANCE CURVE', alt: 'PERFORMANCE CURVE', heading: 'Performance Curve' });
      } else if (this.productId === 'AGAA07A' && this.poleType === '4') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/icons/No-Image-Found.png',
          name: 'PERFORMANCE CURVE', alt: 'Img Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/icons/No-Image-Found.png',
          name: 'PERFORMANCE CURVE', alt: 'Img Required', heading: 'Performance Curve'
        });
      } else if (this.productId === 'AGAA07A' && this.poleType === '6') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/icons/No-Image-Found.png',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/icons/No-Image-Found.png',
          name: 'PERFORMANCE CURVE', alt: 'Img Required', heading: 'Performance Curve'
        });
      } else if (this.productId === 'AGAA07B' && this.poleType === '6') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/icons/No-Image-Found.png',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/icons/No-Image-Found.png',
          name: 'PERFORMANCE CURVE', alt: 'Img Required', heading: 'Performance Curve'
        });
      } else if (this.productId === 'AGAA07B' && this.poleType === '4') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/icons/No-Image-Found.png',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/icons/No-Image-Found.png',
          name: 'PERFORMANCE CURVE', alt: 'Img Required', heading: 'Performance Curve'
        });
      }

      for (let i = 0; i < this.thumbnailImages.length; i++) {
        const src = this.thumbnailImages[i].imgSrc;
        const caption = 'Image ' + this.thumbnailImages[i].alt;
        const thumb = this.thumbnailImages[i].imgSrc;
        const album = {
          src: src,
          caption: caption,
          thumb: thumb
        };

        this.albums.push(album);
      }
      // this.thumbnailImages.pop();
      // this.productCarousalImages.pop();
      // console.log(this.productCarousalImages)
    }
    this.selectedProductImg = this.productCarousalImages[0]; // assign selectedProductImg to 1st index of productImg arraythis.se
    // console.log(this.selectedProductImg, 'imh')
  }

  onMotorChange(event): void {
    // console.log(event, 'ebe')
    this.motorData = event;
  }

  getPerformanceCurve(): void {
    if (this.router.url.includes('multiPurposePumps') && this.router.url.includes('bareShaftPump')) {
      this.thumbnailImages = [
        { imgSrc: 'assets/images/banner/DC.png', name: 'PUMP REVIEW', alt: 'Image Required', heading: '' }
      ];
      this.productCarousalImages = [
        { imgSrc: 'assets/images/banner/DC.png', name: 'PUMP REVIEW', alt: 'Image Required', heading: '' }
      ];
      if (this.productId === 'DCAC012' || this.productId === 'DCAC022' || this.productId === 'DCAC032') {
        this.thumbnailImages.push(
          {
            imgSrc: 'assets/images/Multipurpose_GACW/GA BARESHAFT AND CLOSE COUPLED DC 012 022 032.jpg',
            name: 'GA DWG', alt: 'Image Required', heading: 'General Arrangement Drawing'
          },
          {
            imgSrc: 'assets/images/Multipurpose_GACW/CS DCAC BARESHAFT 012 022 032.jpg',
            name: 'CS DWG', alt: 'CS DWG', heading: 'Cross Sectional Drawing'
          }
        );
        this.productCarousalImages.push(
          {
            imgSrc: 'assets/images/Multipurpose_GACW/GA BARESHAFT AND CLOSE COUPLED DC 012 022 032.jpg',
            name: 'GA DWG', alt: 'Image Required', heading: 'General Arrangement Drawing'
          },
          { imgSrc: 'assets/images/Multipurpose_GACW/CS DCAC BARESHAFT 012 022 032.jpg', name: 'CS DWG', alt: 'CS DWG', heading: 'Cross Sectional Drawing' }
        );
      } else if (this.productId === 'DCAA041' || this.productId === 'DCAA051') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/Multipurpose_GACW/GA BARESHAFT AND CLOSE COUPLED DC 41 51.jpg',
          name: 'GA DWG', alt: 'Image Required', heading: 'General Arrangement Drawing'
        },
          {
            imgSrc: 'assets/images/Multipurpose_GACW/CS DCAA BARESHAFT 041 051.jpg',
            name: 'CS DWG', alt: 'Image Required', heading: 'Cross Sectional Drawing'
          });
        this.productCarousalImages.push(
          {
            imgSrc: 'assets/images/Multipurpose_GACW/GA BARESHAFT AND CLOSE COUPLED DC 41 51.jpg',
            name: 'CS DWG', alt: 'Image Required', heading: 'General Arrangement Drawing'
          },
          {
            imgSrc: 'assets/images/Multipurpose_GACW/CS DCAA BARESHAFT 041 051.jpg',
            name: 'CS DWG', alt: 'Image Required', heading: 'Cross Sectional Drawing'
          }
        );
      }
      if (this.productId === 'DCAC012' && this.pumpSpeed[0] === '800') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC012/DC_012_800RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC012/DC_012_800RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
      }
      else if (this.productId === 'DCAC012' && this.pumpSpeed[0] === '960') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC012/DC_012_960RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC012/DC_012_960RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
      }
      else if (this.productId === 'DCAC012' && this.pumpSpeed[0] === '1200') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC012/DC_012_1200RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC012/DC_012_1200RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
      }
      else if (this.productId === 'DCAC012' && this.pumpSpeed[0] === '1450') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC012/DC_012_1450RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC012/DC_012_1450RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
      }
      else if (this.productId === 'DCAC022' && this.pumpSpeed[0] === '800') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC022/DC_022_800RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC022/DC_022_800RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
      }
      else if (this.productId === 'DCAC022' && this.pumpSpeed[0] === '960') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC022/DC_022_960RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC022/DC_022_960RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
      }
      else if (this.productId === 'DCAC022' && this.pumpSpeed[0] === '1200') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC022/DC_022_1200RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC022/DC_022_1200RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
      }
      else if (this.productId === 'DCAC022' && this.pumpSpeed[0] === '1450') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC022/DC_022_1450RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC022/DC_022_1450RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
      }
      else if (this.productId === 'DCAC032' && this.pumpSpeed[0] === '800') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC032/DC_032_800RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC032/DC_032_800RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
      }
      else if (this.productId === 'DCAC032' && this.pumpSpeed[0] === '960') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC032/DC_032_960RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC032/DC_032_960RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
      }
      else if (this.productId === 'DCAC032' && this.pumpSpeed[0] === '1200') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC032/DC_032_1200RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC032/DC_032_1200RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
      }
      else if (this.productId === 'DCAC032' && this.pumpSpeed[0] === '1450') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC032/DC_032_1450RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC032/DC_032_1450RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
      }
      else if (this.productId === 'DCAA041' && this.pumpSpeed[0] === '800') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC041/DC_041_800RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC041/DC_041_800RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
      }
      else if (this.productId === 'DCAA041' && this.pumpSpeed[0] === '960') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC041/DC_041_960RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC041/DC_041_960RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
      }
      else if (this.productId === 'DCAA041' && this.pumpSpeed[0] === '1200') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC041/DC_041_1200RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC041/DC_041_1200RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
      }
      else if (this.productId === 'DCAA041' && this.pumpSpeed[0] === '1450') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC041/DC_041_1450RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC041/DC_041_1450RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
      }
      else if (this.productId === 'DCAA051' && this.pumpSpeed[0] === '800') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC051/DC_051_800RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC051/DC_051_800RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
      }
      else if (this.productId === 'DCAA051' && this.pumpSpeed[0] === '960') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC051/DC_051_960RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC051/DC_051_960RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
      }
      else if (this.productId === 'DCAA051' && this.pumpSpeed[0] === '1200') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC051/DC_051_1200RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC051/DC_051_1200RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
      }
      else if (this.productId === 'DCAA051' && this.pumpSpeed[0] === '1450') {
        this.thumbnailImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC051/DC_051_1450RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
        this.productCarousalImages.push({
          imgSrc: 'assets/images/Multipurpose_PC_New/MultipuposeBS/DC051/DC_051_1450RPM.jpg',
          name: 'PERFORMANCE CURVE', alt: 'Image Required', heading: 'Performance Curve'
        });
      }

      for (let i = 0; i < this.thumbnailImages.length; i++) {
        const src = this.thumbnailImages[i].imgSrc;
        const caption = 'Image ' + this.thumbnailImages[i].alt;
        const thumb = this.thumbnailImages[i].imgSrc;
        const album = {
          src: src,
          caption: caption,
          thumb: thumb
        };

        this.albums.push(album);
      }
    }
  }

  // toggleDriveType(event): void{
  //   console.log('event: ', this.driveType)
  // }

  // function to get product details by passing productId and productPoleType(4 or 6)
  getProductDetails(productId: string, poleType: string): void {
    // productById api call to get that particular product
    this.apiService.productById(productId, poleType).subscribe(res => {
      if (res[`code`] === 200) {
        this.productsDetail = res[`product`]; // assigned res['product] to productDetails
        // console.log('productDetail', this.productsDetail)
        this.selectedProduct = this.productsDetail[0]; // assign 1st index of productDetails to selectedProduct
        if (this.router.url.includes('surfaceAgriPumps') && this.router.url.includes('closedCouplePump')) {
          this.toggleMotorDriveOption = res[`drive`];
          if (this.toggleMotorDriveOption.length) {
            this.toggleMotorDriveOption.forEach(eachData => {
              Object.values(eachData).forEach(data => {
                // console.log(data, 'data')
                this.toggleSelectorDropdown.push(data);
              });
            });
          }
          // this.quantityValue = this.selectedProduct[`details`].productQuantity;
          // this.onchangeSelectedProduct();
          // this.findGrandTotal();

        } else if ((this.router.url.includes('multiPurposePumps') && this.router.url.includes('closedCouplePump'))) {
          this.toggleDropdown = false;
          this.toggleDetails = true;
          this.driveType = null;
          this.quantityValue = this.selectedProduct[`details`].productQuantity;
          this.defaultSelectedProductPrice = this.selectedProduct[`details`].price;
          this.onchangeSelectedProduct();
          this.findGrandTotal();
          // if (res[`drive`].length) {
          //   res[ `drive`].forEach(driveData => {
          //     console.log(driveData, 'driveType')
          //   });
          // }
        }
        else {
          this.getDriveMotorOptions(this.selectedProduct.details.code);
        }
        // if (this.selectedProduct[`motor`].volt !== null) {
        //     this.toggleOption = false;
        // }else{
        //     this.toggleOption = true;
        // }
        // console.log(this.selectedProduct.details, 'details')
        // this.getImageCarosual(this.selectedProduct[`details`].id);
        // this.defaultSelectedProductPrice = this.selectedProduct[`details`].price; /* assign selectedProduct price
        //  to defaultSelectedProductPrice*/
        // this.quantityValue = this.selectedProduct[`details`].productQuantity;
        // this.onchangeSelectedProduct();
        // this.findGrandTotal();
      }
    }, err => {
      this.toaster.error(err?.error?.message || err?.message);
    });
  }

  getDriveMotorOptions(modelCode): void {
    // this.toggleSelectorDropdown= [];
    this.apiService.driveTypes(modelCode).subscribe(res => {
      if (res[`code`] === 200) {
        this.toggleMotorDriveOption = res[`drive_type`];

        if (this.toggleMotorDriveOption.length) {
          this.toggleMotorDriveOption.forEach(eachData => {
            Object.values(eachData).forEach(data => {
              // console.log(data, 'data')
              this.toggleSelectorDropdown.push(data);
            });
          });
          // console.log('data', this.toggleSelectorDropdown)
        }
      }
    });
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.albums, index, {
      wrapAround: true,
      showImageNumberLabel: true,
      showZoom: true,
      showRotate: true,
      centerVertically: true
    });
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  toggleDriveType(data): void {
    if (this.router.url.includes('surfaceAgriPumps') && this.router.url.includes('closedCouplePump')) {
      this.toggleDetails = true;
      this.driveDesc = this.selectedProduct[`details`].drive_desc;
      this.driveType = data;
      this.quantityValue = this.selectedProduct[`details`].productQuantity;
      this.defaultSelectedProductPrice = this.selectedProduct[`details`].price;
      this.onchangeSelectedProduct();
      this.findGrandTotal();
    }
    else {
      this.apiService.dataDriveTypes(this.selectedProduct.details.code, data).subscribe(res => {
        if (res[`code`] === 200) {
          this.selectedProduct = [];
          this.toggleDetails = true;
          this.driveType = data;
          if (res[`product`].length) {
            this.selectedProduct = res[`product`][0];
          }
          if (this.driveType === 'Diesel Engine Manual (engine speed 1800 rpm)' || this.driveType === 'Diesel Engine Automatic') {
            this.toggleDieselEngine = true;
            this.engineKw = this.selectedProduct[`details`].pole;
          } else {
            this.toggleDieselEngine = false;
          }
          this.driveDesc = this.selectedProduct[`details`].drive_desc;
          this.defaultSelectedProductPrice = this.selectedProduct[`details`].price; /* assign selectedProduct price
                                                                                       to defaultSelectedProductPrice*/
          this.quantityValue = this.selectedProduct[`details`].productQuantity;
          this.onchangeSelectedProduct();
          this.findGrandTotal();
        }
      });
    }
  }

  getTableData(productId: string, poleType: string, tableId: string): void {
    this.apiService.bareShaftTableDetails(productId, poleType, tableId).subscribe(
      res => {
        if (res[`code`] === 200) {
          let table;
          this.tableInfo = res[`Bareshaft`];
          this.tableValues = this.tableInfo[0];
          table = this.tableValues[this.tableIndex];
          this.tableDetails = table.split(',');
          this.pumpSpeed = this.tableValues[`pump_speed`].split(' - ');
          if (this.tableDetails.length > 3 && this.tableDetails[3] !== '33 ft') {
            this.tableIndex = +this.tableIndex * 2;
          }
          if (this.router.url.includes('multiPurposePumps') && this.router.url.includes('bareShaftPump')) {
            this.getPerformanceCurve();
          }
        }
      }
    );
  }

  getImageCarosual(productId): void {
    this.apiService.imageCarousel(productId).subscribe(res => {
      if (res[`code`] === 200) {
        this.productCarousalImages = res[`product_images`];
      }
    })
  }

  // function to assign values to warranty, accessories and spares
  onchangeSelectedProduct(): void {
    // console.log('selectedProduct', this.selectedProduct);
    this.warranty = this.selectedProduct.warranty;
    this.accessories = [];
    this.spares = [];
    this.standardWarranty = this.warranty[0]; // default warranty of 1 year is selected
    // console.log(this.selectedProduct.motor[0]['4pole'], "4pole")
    // if (this.selectedProduct.motor[0]['4pole'] !== null) {
    //   this.toggleMotorDriveOption = this.selectedProduct.motor[0];
    //   Object.keys(this.toggleMotorDriveOption).forEach(data => {
    //     this.toggleSelectorDropdown.push(this.toggleMotorDriveOption[data]);
    //   });
    //   console.log('gift1', this.toggleMotorDriveOption);
    // }

    // if (this.selectedProduct.drive[0]['nodrive'] !== null) {
    //   this.toggleMotorDriveOption = this.selectedProduct.drive[0];
    //   Object.keys(this.toggleMotorDriveOption).forEach(data => {
    //     this.toggleSelectorDropdown.push(this.toggleMotorDriveOption[data]);
    //   });
    //   console.log('gift2', this.toggleMotorDriveOption);
    // }

    if (this.selectedProduct.accessories.length > 0) {
      // this.accessories = this.selectedProduct.accessories;
      this.selectedProduct.accessories.filter(eachAccessory => {
        if (eachAccessory.productPrice !== null && eachAccessory.productPrice !== "NULL" && eachAccessory.productPrice !== 0) {
          if (eachAccessory.productName === 'Baseplate') {
            eachAccessory.imgSrc = 'assets/images/SparesImg/Baseplate_pic.png';
          } else if (eachAccessory.productName === 'DRP') {
            eachAccessory.imgSrc = 'assets/images/SparesImg/DRP_pic.png';
          }
          this.accessories.push(eachAccessory);
        }
      });
    } else {
      this.emptyAccMsg = 'No accessories found';
    }
    // assign selectedProduct spares to spare array
    // this.selectedProduct.spare = [];
    if (this.selectedProduct.spares.length > 0) {
      this.selectedProduct.spares.filter(eachSpare => {
        if (eachSpare?.productPrice !== null && eachSpare.productPrice !== "NULL" && eachSpare?.productPrice !== 0) {
          let spareDiscountPrice = 0;
          spareDiscountPrice = eachSpare?.productPrice - (eachSpare?.productPrice * 0.1);
          eachSpare.discountPrice = Math.round(spareDiscountPrice);
          if (eachSpare.productName === 'Rotor') {
            eachSpare.imgSrc = 'assets/images/SparesImg/rotor.jpg';
          }
          else if (eachSpare.productName === 'Stator') {
            eachSpare.imgSrc = 'assets/images/icons/stator.png';
          }
          else if (eachSpare.productName === 'Mech Seal') {
            eachSpare.imgSrc = 'assets/images/SparesImg/Mechanical-Seal_image.jpg';
          }
          else if (eachSpare.productName === 'UJ M Kit') {
            eachSpare.imgSrc = 'assets/images/SparesImg/UJ_KIT.jpg';
          }
          this.spares.push(eachSpare);
        }
      });
    } else {
      this.emptySpareMsg = 'No spares found';
    }
  }

  // function to calculate the total price of selected product, accessory and spare
  findGrandTotal(): void {
    let accessoryPrice = 0; // default accessory price 0
    let sparePrice = 0; // default spare price 0
    // using loop to get the selected accessories price
    this.accessories.forEach((ele) => {
      if (ele.accessoryQuantity) {
        accessoryPrice = (+ele.productPrice) + accessoryPrice;
      }
    });
    // using loop to get the selected spares price
    this.spares.forEach((ele) => {
      if (ele.spareQuantity) {
        // sparePrice = (ele.productPrice * ele.spareQuantity) + sparePrice;
        sparePrice = (ele.discountPrice * ele.spareQuantity) + sparePrice;
      }
    });
    // calculating grandTotal
    this.grandTotal = (accessoryPrice + sparePrice) + (this.quantityValue * (+this.selectedProduct.details.price));
    this.shippingCharges = Math.round(+(0.05 * this.grandTotal).toFixed(3)); // 5% of totalCharges
    this.finalPrice = Math.round(this.grandTotal + this.shippingCharges); // adding price with shippingCharges and assigning to total
    this.gstPrice = Math.round(+(0.10 * this.finalPrice).toFixed(3));
  }

  // function to change warranty
  changeProductWarranty(warrantyCount): void {
    this.standardWarranty = this.warranty[warrantyCount]; /* getting warrantyCount(warrantyIndex) as assign warranty
                                                                             to selectedWarranty */
    if (+this.standardWarranty.price === 0) {
      this.selectedProduct.details.price = this.defaultSelectedProductPrice; /* changing selected Price according to
                                                                              defaultSelectedProductPrice */
    } else {
      this.selectedProduct.details.price = this.standardWarranty.price; // changing selected Price according to standardWarranty price
    }
    this.findGrandTotal();
  }

  // function to change motorVoltage and change products according to motorVolt
  changeMotorVoltage(voltCount): void {
    this.selectedProduct = this.productsDetail[voltCount];
    this.defaultSelectedProductPrice = this.selectedProduct?.details?.price;
    this.onchangeSelectedProduct();
    this.findGrandTotal();
  }

  // function to increment productQuantity
  incrementQuantity(): void {
    this.quantityValue = this.quantityValue + 1;
    this.findGrandTotal();
  }

  // function to decrement productQuantity
  decrementQuantity(): void {
    this.quantityValue = this.quantityValue - 1;
    if (this.quantityValue < 1) {
      this.quantityValue = 1;
    }
    this.findGrandTotal();
  }

  // function to decrement spareQuantity
  consumptionSpareDecrement(spareCount): void {
    this.spares[spareCount].spareQuantity--;
    this.findGrandTotal();
  }

  // function to increment spareQuantity
  consumptionSpareIncrement(spareCount): void {
    this.spares[spareCount].spareQuantity++;
    this.findGrandTotal();
  }

  // function to toggleAccessory(if checked increase accessory product count to 1 else to 0)
  toggleAccessories(event, accessoryCount): void {
    if (event.srcElement.checked) {
      this.accessories[accessoryCount].accessoryQuantity = 1;
    }
    else {
      this.accessories[accessoryCount].accessoryQuantity = 0;
    }
    this.findGrandTotal();
  }

  // function to add product, accessory and spares to cart
  addToCart(): void {
    const accessoriesToAdd = []; // accessoriesToAdd[] to add accessory
    const sparesToAdd = []; // sparesToAdd[] to add spare
    let driveType = null;

    if (this.driveType !== null) {
      driveType = {
        desc: this.driveType
      };
    } else {
      driveType = { desc: '' };
    }

    // array to push selected Accessory
    this.accessories.forEach(ele => {
      if (ele.accessoryQuantity >= 1) {
        const accessory = new CartDetails(this.selectedProduct?.details?.id,
          ele.productName, ele.productDesc, ele.productPrice, 0, 'accessory',
          this.pumpSpeed.length ? this.pumpSpeed[1] : this.selectedProduct?.details?.pole,
          this.tableDetails.length > 0 ? this.tableIndex + ' LPS/ ' + this.tableDetails[1] + ' GPH' :
            this.selectedProduct?.details?.flow + ' LPS',
          this.tableDetails.length > 0 ? this.tableIndex + ' m' ? this.tableDetails.length > 0 ? this.tableIndex + ' m' + ' / ' +
            this.tableDetails[3] : '' : ''
            : this.selectedProduct?.details?.head + 'm',
          this.pumpSpeed.length ? this.pumpSpeed[0] + ' RPM' : this.selectedProduct?.details?.speed + ' RPM',
          this.tableDetails.length > 0 ? this.tableDetails[2] + ' KW' : '0',
          this.toggleDieselEngine ? '1800 RPM' : '0',
          this.toggleDieselEngine ? '5.5 kw' : '0',
          driveType.desc,
          ele.accessoryQuantity);
        accessoriesToAdd.push(accessory);
      }
    });

    // array to push selected Spare
    this.spares.forEach(ele => {
      if (ele.spareQuantity >= 1) {
        const spare = new CartDetails(
          this.selectedProduct?.details?.id, ele.productName, ele.productDesc,
          ele.productPrice, ele.discountPrice, 'spare',
          this.pumpSpeed.length ? this.pumpSpeed[1] : this.selectedProduct?.details?.pole,
          this.tableDetails.length > 0 ? this.tableIndex + ' LPS/ ' + this.tableDetails[1] + ' GPH' :
            this.selectedProduct?.details?.flow + ' LPS',
          this.tableDetails.length > 0 ? this.tableIndex + ' m' ? this.tableDetails.length > 0 ? this.tableIndex + ' m' + ' / ' +
            this.tableDetails[3] : '' : ''
            : this.selectedProduct?.details?.head + ' m',
          this.pumpSpeed.length ? this.pumpSpeed[0] + ' RPM' : this.selectedProduct?.details?.speed + ' RPM',
          this.tableDetails.length > 0 ? this.tableDetails[2] + ' KW' : '0',
          this.toggleDieselEngine ? '1800 RPM' : '0',
          this.toggleDieselEngine ? '5.5 kw' : '0',
          driveType.desc, ele.spareQuantity);
        sparesToAdd.push(spare);
      }
    });

    // assign selectedProduct to cart
    const cart = new CartDetails(
      this.selectedProduct.details.id,
      this.selectedProduct.details.code,
      this.selectedProduct.details.description,
      this.selectedProduct.details.price,
      0,
      'product',
      this.pumpSpeed.length ? this.pumpSpeed[1] : this.selectedProduct?.details?.pole,
      this.tableDetails.length > 0 ? this.tableIndex + ' LPS/ ' + this.tableDetails[1] + ' GPH' :
        this.selectedProduct?.details?.flow + ' LPS',
      this.tableDetails.length > 0 ? this.tableIndex + ' m' ? this.tableDetails.length > 0 ? this.tableIndex + ' m' + ' / ' +
        this.tableDetails[3] : '' : ''
        : this.selectedProduct?.details?.head,
      this.pumpSpeed.length ? this.pumpSpeed[0] + ' RPM' : this.selectedProduct?.details?.speed + ' RPM',
      this.tableDetails.length > 0 ? this.tableDetails[2] + ' KW' : '0',
      this.toggleDieselEngine ? '1800 RPM' : '0',
      this.toggleDieselEngine ? '5.5 kw' : '0',
      driveType.desc,
      this.quantityValue
    );

    // if (localStorage.getItem('id')) { // check if userId is present or not in localStorage
    if (sessionStorage.getItem('id')) { // check if userId is present or not in sessionStorage
      // tslint:disable-next-line: max-line-length
      // if (localStorage.getItem('cartId') === null) { // check if cartId is present or not in localStorage(if not present the value is null)
      if (sessionStorage.getItem('cartId') === null) { // check if cartId is present or not in sessionStorage(if not present the value is null)
        // tslint:disable-next-line: max-line-length
        if (sessionStorage.getItem('cart') === null) { // check if cart is present or not in sessionStorage(if not present the value is null)
          const cartArray = []; // declaring an empty array
          cartArray.push({ ...cart }); // pushing cart(i.e. selectedProduct) to cartArray
          cartArray.push(...accessoriesToAdd); // pushing accessoriesToAdd in cartArray
          cartArray.push(...sparesToAdd); // pushing sparesToAdd in cartArray

          // cartData object with userId and cartArray to pass as parameter(in post body) in addToCart api
          const cartData = {
            // user_id: window.atob(localStorage.getItem('id')),
            user_id: window.atob(sessionStorage.getItem('id')),
            cart: JSON.stringify(cartArray)
          };
          // calling addToCart api
          this.apiService.addToCart(cartData).subscribe(res => {
            if (res[`code`] === 200) {
              const cartItems = JSON.parse(res[`cart_details`].cart);
              // localStorage.setItem('cartId', window.btoa(res[`cart_details`].id));
              sessionStorage.setItem('cartId', window.btoa(res[`cart_details`].id));
              this.toaster.success('Successfully Added To Cart');
              this.apiService.totalItemsInCart();
              // console.log('res', res)
            }
          });

        }
        else {
          // fetching data from sessionStorage and assign to cartLocalData
          const cartLocalData = JSON.parse(window.atob(sessionStorage.getItem('cart'))) as CartDetails[];
          this.updateCartDetails(cartLocalData, cart, accessoriesToAdd, sparesToAdd, 'add'); // calling upDataCart to add
        }
      }
      // userId is present
      else {
        // calling getCartById api to get cartData using cartId
        // this.apiService.getCartById(window.atob(localStorage.getItem('cartId'))).subscribe(res => {
        this.apiService.getCartById(window.atob(sessionStorage.getItem('cartId'))).subscribe(res => {
          if (res[`code`] === 200) {
            let cartDetails;
            // console.log('update', cart)
            cartDetails = (JSON.parse(res[`details`].cart) as CartDetails[]);
            this.updateCartDetails(cartDetails, cart, accessoriesToAdd, sparesToAdd, 'update'); // calling upDataCart to update
          }
        }, err => {
          this.toaster.error(err?.error?.message || err?.message);
        });
      }
    }
    else {
      if (sessionStorage.getItem('cart') && (sessionStorage.getItem('cart').length > 2)) {
        const cartLocalData = JSON.parse(window.atob(sessionStorage.getItem('cart'))) as CartDetails[];
        this.updateCartDetails(cartLocalData, cart, accessoriesToAdd, sparesToAdd, 'session'); // calling upDataCart to store in session
      }
      else {
        const cartArray = [];
        cartArray.push({ ...cart });
        cartArray.push(...accessoriesToAdd);
        cartArray.push(...sparesToAdd);
        sessionStorage.setItem('cart', window.btoa(JSON.stringify(cartArray)));
        this.apiService.totalItemsInCart();
      }
      this.toaster.success('Successfully Added To Cart');
    }
  }

  updateCartDetails(cartDetails, cart, accessoriesToAdd, sparesToAdd, type: string): void {
    let cartItems; // to store cartProducts
    // checking cartDetails length and if length 0 then push data in cartDetails
    if (cartDetails.length <= 0) {
      cartDetails.push(cart);
      cartDetails.push(...accessoriesToAdd);
      cartDetails.push(...sparesToAdd);
    }
    // cartDetails length is greater than 0
    else {
      const cartAccessoryDataSet = new Array(); // creating new accessoryArray
      const cartSpareDataSet = new Array(); // creating new spareArray
      let cartProductDataSet; // variable to set productData
      let spareNotExist = true; // check if spare type is present in cartLocalData
      let accessoryNotExist = true; // check if accessory type is present in cartLocalData
      let cartNotExist = true;
      // for loop starts
      for (let i = 0; i < cartDetails.length; i++) {
        if (cartDetails[i].type === 'product') { // checking productType
          cartNotExist = false;
          if ((cartDetails[i].driveType === cart.driveType) && (cartDetails[i].code === cart.code) &&
            (cartDetails[i].pole === cart.pole)) {
            cartDetails[i].productQuantity++;
          } else {
            cartProductDataSet = cart;
          }
        } else if (cartDetails[i].type === 'accessory') {
          accessoryNotExist = false;
          for (let j = 0; j < accessoriesToAdd.length; j++) {
            if (accessoriesToAdd[j].description === cartDetails[i].description
              && accessoriesToAdd[j].pole === cartDetails[i].pole
              && accessoriesToAdd[j].driveType === cartDetails[i].driveType) { // checking productType
              cartDetails[i].productQuantity++;
            } else {
              /* some() is used to checks whether at least one of the elements of the array satisfies
                the condition then returns true (and does not check the remaining values) otherwise return false*/
              if (!cartDetails.some(res => (res.description === accessoriesToAdd[j].description)
                && (res.pole === accessoriesToAdd[j].pole) && (res.driveType === accessoriesToAdd[j].driveType)) &&
                (!cartAccessoryDataSet.some(res => (res.description === accessoriesToAdd[j].description)
                  && (res.pole === accessoriesToAdd[j].pole) && (res.driveType === accessoriesToAdd[j].driveType)))) {
                cartAccessoryDataSet.push(accessoriesToAdd[j]);
              }
            }
          }
        } else if (cartDetails[i].type === 'spare') { // checking productType
          spareNotExist = false;
          for (let j = 0; j < sparesToAdd.length; j++) {
            if (sparesToAdd[j].description === cartDetails[i].description
              && sparesToAdd[j].pole === cartDetails[i].pole
              && sparesToAdd[j].driveType === cartDetails[i].driveType) {
              cartDetails[i].productQuantity++;
            } else {
              /* some() is used to checks whether at least one of the elements of the array satisfies
                the condition then returns true (and does not check the remaining values) otherwise return false*/
              if ((!cartDetails.some(res => (res.description === sparesToAdd[j].description)
                && (res.pole === sparesToAdd[j].pole) && (res.driveType === sparesToAdd[j].driveType))) &&
                (!cartSpareDataSet.some(res => (res.description === sparesToAdd[j].description) &&
                  (res.pole === sparesToAdd[j].pole) && (res.driveType === sparesToAdd[j].driveType)))) {
                cartSpareDataSet.push(sparesToAdd[j]);
              }
            }
          }
        }
      }
      // for loops ends

      // checking to push if cartAccessoryDataSet length is greater than 0
      if (cartAccessoryDataSet.length > 0) {
        cartDetails.push(...cartAccessoryDataSet);
      }

      // checking to push if cartSpareDataSet length is greater than 0
      if (cartSpareDataSet.length > 0) {
        cartDetails.push(...cartSpareDataSet);
      }

      // checking to push if cartProductDataSet is not undefined
      if (cartProductDataSet !== undefined) {
        cartDetails.push({ ...cartProductDataSet });
      }

      // checking to push if accessory exist
      if (accessoryNotExist) {
        cartDetails.push(...accessoriesToAdd);
      }

      // checking to push if spare exist
      if (spareNotExist) {
        cartDetails.push(...sparesToAdd);
      }

      if (cartNotExist) {
        cartDetails.push({ ...cart });
      }
    }

    if (type === 'add') {
      // cartData object with userId and cartArray to pass as parameter(in post body) in addToCart api
      const cartData = {
        // user_id: window.atob(localStorage.getItem('id')),
        user_id: window.atob(sessionStorage.getItem('id')),
        cart: JSON.stringify(cartDetails)
      };

      // calling addToCart api to add products in cart
      this.apiService.addToCart(cartData).subscribe(res => {
        if (res[`code`] === 200) {
          cartItems = JSON.parse(res[`cart_details`].cart);
          // localStorage.setItem('cartId', window.atob(res[`cart_details`].id));
          sessionStorage.setItem('cartId', window.atob(res[`cart_details`].id));
          this.toaster.success('Successfully Added To Cart');
          this.apiService.totalItemsInCart();
        }
      });
    }
    else if (type === 'update') {
      // cartData object with userId , cartId and cartArray to pass as parameter(in post body) in updateToCart api
      const updateCart = {
        // id: window.atob(localStorage.getItem('cartId')),
        // user_id: window.atob(localStorage.getItem('id')),
        id: window.atob(sessionStorage.getItem('cartId')),
        user_id: window.atob(sessionStorage.getItem('id')),
        cart: JSON.stringify(cartDetails)
      };

      // calling updateCart api
      this.apiService.updateCart(updateCart).subscribe(res => {
        if (res[`code`] === 200) {
          this.toaster.success('Cart successfully stored');
          this.apiService.totalItemsInCart();
        }
      }, err => {
        this.toaster.error(err?.error?.message || err?.message);
      });
    }
    else if (type === 'session') {
      sessionStorage.setItem('cart', window.btoa(JSON.stringify(cartDetails)));
      this.apiService.totalItemsInCart();
    }
  }

  // buyNow function to instant buy things
  buyNow(): void {
    const accessoriesToAdd = []; // accessoriesToAdd[] to add accessory
    const sparesToAdd = []; // sparesToAdd[] to add spare
    const cartArray = [];
    let driveType = null;

    if (this.driveType !== null) {
      driveType = {
        desc: this.driveType
      };
    } else {
      driveType = { desc: '' };
    }

    // array to push selected Accessory
    this.accessories.forEach(ele => {
      if (ele.accessoryQuantity >= 1) {
        const acc = new CartDetails(this.selectedProduct?.details?.id, ele.productName, ele.productDesc,
          ele.productPrice, 0, 'accessory',
          this.pumpSpeed.length ? this.pumpSpeed[1] : this.selectedProduct?.details?.pole,
          this.tableDetails.length > 0 ? this.tableIndex + ' LPS/ ' + this.tableDetails[1] + ' GPH' :
            this.selectedProduct?.details?.flow + ' LPS',
          this.tableDetails.length > 0 ? this.tableIndex + ' m' ? this.tableDetails.length > 0 ? this.tableIndex + ' m' + ' / ' +
            this.tableDetails[3] : '' : ''
            : this.selectedProduct?.details?.head + ' m',
          this.pumpSpeed.length ? this.pumpSpeed[0] + ' RPM' : this.selectedProduct?.details?.speed + ' RPM',
          this.tableDetails.length > 0 ? this.tableDetails[2] + ' KW' : '0',
          this.toggleDieselEngine ? '1800 RPM' : '0',
          this.toggleDieselEngine ? '5.5 kw' : '0',
          driveType.desc,
          ele.accessoryQuantity);
        accessoriesToAdd.push(acc);
      }
    });

    // array to push selected Spare
    this.spares.forEach(ele => {
      if (ele.spareQuantity >= 1) {
        const spares = new CartDetails(this.selectedProduct?.details?.id,
          ele.productName, ele.productDesc, ele.productPrice, ele.discountPrice, 'spare',
          this.pumpSpeed.length ? this.pumpSpeed[1] : this.selectedProduct?.details?.pole,
          this.tableDetails.length > 0 ? this.tableIndex + ' LPS/ ' + this.tableDetails[1] + ' GPH' :
            this.selectedProduct?.details?.flow + ' LPS',
          this.tableDetails.length > 0 ? this.tableIndex + ' m' ? this.tableDetails.length > 0 ? this.tableIndex + ' m' + ' / ' +
            this.tableDetails[3] : '' : ''
            : this.selectedProduct?.details?.head + ' m',
          this.pumpSpeed.length ? this.pumpSpeed[0] + ' RPM' : this.selectedProduct?.details?.speed + ' RPM',
          this.tableDetails.length > 0 ? this.tableDetails[2] + ' KW' : '0',
          this.toggleDieselEngine ? '1800 RPM' : '0',
          this.toggleDieselEngine ? '5.5 kw' : '0',
          driveType.desc, ele.spareQuantity);
        sparesToAdd.push(spares);
      }
    });

    // assign selectedProduct to cart
    const cart = new CartDetails(
      this.selectedProduct?.details?.id,
      this.selectedProduct.details.code,
      this.selectedProduct.details.description,
      this.selectedProduct.details.price,
      0,
      'product',
      this.pumpSpeed.length ? this.pumpSpeed[1] : this.selectedProduct?.details?.pole,
      this.tableDetails.length > 0 ? this.tableIndex + ' LPS/ ' + this.tableDetails[1] + ' GPH' :
        this.selectedProduct?.details?.flow + ' LPS',
      this.tableDetails.length > 0 ? this.tableIndex + ' m' ? this.tableDetails.length > 0 ? this.tableIndex + ' m' + ' / ' +
        this.tableDetails[3] : '' : ''
        : this.selectedProduct?.details?.head + ' m',
      this.pumpSpeed.length ? this.pumpSpeed[0] + ' RPM' : this.selectedProduct?.details?.speed + ' RPM',
      this.tableDetails.length > 0 ? this.tableDetails[2] + ' KW' : '0',
      this.toggleDieselEngine ? '1800 RPM' : '0',
      this.toggleDieselEngine ? '5.5 kw' : '0',
      driveType.desc,
      this.quantityValue
    );

    // pushing all data in cartArray
    cartArray.push({ ...cart });
    cartArray.push(...accessoriesToAdd);
    cartArray.push(...sparesToAdd);

    // setting cartArray in sessionStorage
    sessionStorage.setItem('buyNow', window.btoa(JSON.stringify(cartArray)));

    // checking userId present or not according to it next route is activated.
    // if (localStorage.getItem('id')) {
    if (sessionStorage.getItem('id')) {
      this.router.navigate(['/cart/deliveryAddress']);
    } else {
      this.router.navigate(['/sign-in'], { queryParams: { origin: 'cartAddress' } });
    }
  }

  // function to change carousalImage according to selectedIndex
  changeCarousalImg(imgIndex: number): void {
    this.carouselIndexVal = imgIndex;
    switch (imgIndex) {
      case 0:
        this.selectedProductImg = this.productCarousalImages[0];
        break;
      case 1:
        this.selectedProductImg = this.productCarousalImages[1];
        break;
      case 2:
        this.selectedProductImg = this.productCarousalImages[2];
        break;
      case 3:
        this.selectedProductImg = this.productCarousalImages[3];
        break;
      default:
        this.selectedProductImg = this.productCarousalImages[0];
    }
  }

  // function to zoom image
  imageZoom(imgID, resultID): void {
    let img;
    let lens;
    let result;
    let cx;
    let cy;
    // this.toggleSelector = true;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /*create lens:*/
    lens = document.createElement('DIV');
    lens.setAttribute('class', 'img-zoom-lens');
    /*insert lens:*/
    lens.style.color = 'black';
    img.parentElement.insertBefore(lens, img);
    /*calculate the ratio between result DIV and lens:*/
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /*set background properties for the result DIV:*/
    result.style.backgroundImage = 'url(\'' + img.src + '\')';
    result.style.backgroundSize = ((img.width) * cx) + 'px ' + ((img.height) * cy) + 'px';
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener('mousemove', moveLens);
    img.addEventListener('mousemove', moveLens);
    /*and also for touch screens:*/
    lens.addEventListener('touchmove', moveLens);
    img.addEventListener('touchmove', moveLens);
    function moveLens(e): void {
      let pos;
      let x;
      let y;
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      /*calculate the position of the lens:*/
      x = pos.x - (lens.offsetWidth / 2);
      y = pos.y - (lens.offsetHeight / 2);
      /*prevent the lens from being positioned outside the image:*/
      if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth; }
      if (x < 0) { x = 0; }
      if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight; }
      if (y < 0) { y = 0; }
      /*set the position of the lens:*/
      lens.style.left = x + 'px';
      lens.style.top = y + 'px';
      /*display what the lens "sees":*/
      result.style.backgroundPosition = '-' + (x * cx) + 'px -' + (y * cy) + 'px';
    }
    function getCursorPos(e): {} {
      let a;
      let x = 0;
      let y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x, y };
    }
  }

  // function to remove zoom on mouseout
  imageZoomOut(event): void {
    const imageClass = event.path[0].firstChild.className;
    const classRes = document.getElementsByClassName(imageClass);
    if (classRes.length > 0) {
      const lastClass = classRes[classRes.length - 1];
      lastClass[`style`].visibility = 'hidden';
      // this.toggleSelector = false;
    }
  }

}
