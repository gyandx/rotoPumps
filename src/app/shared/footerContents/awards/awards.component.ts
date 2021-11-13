import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {
  pageContent: any;
  pageType: string;
  footerPages = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.awardAndCertificates().subscribe((res: any) => {
      this.pageType = res?.awardsandcertificates?.type
      this.pageContent = res?.awardsandcertificates?.content;
    });
  }

}
