import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { RetroSubSpareDetails } from 'src/app/dataModels/retroSpareSubCat';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-retro-selection',
  templateUrl: './retro-selection.component.html',
  styleUrls: ['./retro-selection.component.css']
})
export class RetroSelectionComponent implements OnInit {

  retroSpares: Array<any> = [];
  retroSparesDetails: RetroSubSpareDetails[] = [];
  defaultSelected: any;


  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(map( data => {
      return data.retroData;
    })).subscribe( res => {
      if (res[`code`] === 200){
        this.retroSpares = res[`categories`];
        if (this.retroSpares.length){
          this.defaultSelected = this.retroSpares[0];
          this.getSparesSubCategory(this.defaultSelected.id);
        }
      }
    });
  }

  getSparesSubCategory(spareId): void {
    this.apiService.retroSubCategoryDetails(spareId).subscribe(res => {
      if (res[`code`] === 200){
        this.retroSparesDetails = res[`categories`];
      }
    });
  }

}
