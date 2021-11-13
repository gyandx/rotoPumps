import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorText: string;
  errorType: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // getting the error message from interceptors according to status code.
    this.activatedRoute.queryParams.subscribe(res => {
      if (res[`errorMsg`] !== undefined){
        this.errorText = res[`errorMsg`];
        this.errorType = true;
      }else{
        this.errorText = 'Page Not Found';
      }
    });
  }
}
