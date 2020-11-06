import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogService } from '../shared/services/catalog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  locations: any;
  constructor(private catalogService: CatalogService, private router: Router) { }

  ngOnInit() {
    this.catalogService.catalog();
    const data = JSON.parse(localStorage.getItem('catalog'));
    if (data) {
      this.locations = data.data.locations;
    }
  }


  selectBranch(dealersID, branchID) {
    this.router.navigate(['listing', dealersID, branchID]);
  }
}
