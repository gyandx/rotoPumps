import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  pageContent = [];
  pageType: string;
  footerPages = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.footerContents().subscribe(res => {
      if (res[`code`] === 200) {
        this.footerPages = res[`pages`];
        this.getFooterData('Privacy Policy');
      }
    });
  }

  getFooterData(page: string): any {
    if (this.footerPages.length) {
      this.pageContent = this.footerPages.filter(data => data.type === page);
    } else {
      this.pageContent = this.pageContent;
    }
  }

}
