import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css']
})
export class TermsConditionsComponent implements OnInit {

  pageContent: any;
  pageType: string;
  footerPages = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.footerContents().subscribe(res => {
      if (res[`code`] === 200) {
        this.footerPages = res[`pages`];
        this.getFooterData('Terms & Conditions');
      }
    });
  }

  getFooterData(page: string): any {
    if (this.footerPages.length) {
      this.pageContent = this.footerPages.filter(data => data.type === page)[0];
      this.pageType = this.pageContent.type;
    } else {
      this.pageContent = this.pageContent;
    }
  }

}
