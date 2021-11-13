import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-roto-edge',
  templateUrl: './roto-edge.component.html',
  styleUrls: ['./roto-edge.component.css']
})
export class RotoEdgeComponent implements OnInit {

  pageContent = [];
  pageType: string;
  footerPages = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.footerContents().subscribe(res => {
      if (res[`code`] === 200) {
        this.footerPages = res[`pages`];
        this.getFooterData('Roto Edge');
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
