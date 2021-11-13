import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  pageContent: any;
  pageType: string;
  footerPages = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.researchAndDevelopment().subscribe((res: any) => {
      this.pageType = res?.researchanddevelopment?.type
      this.pageContent = res?.researchanddevelopment?.content;
    });
  }

}
