import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }
}
