import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from '../shared/services/catalog.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  categories: any = '';
  params: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private catalogService: CatalogService
    ) {
    this.route.params.subscribe( params => {
      this.params = params;
      this.allListitems();
    });
  }

  ngOnInit() {
  }

  back() {
      this.router.navigate(['listing', this.params.dealersID, this.params.branchID]);
  }
  allListitems() {
    this.categories = this.catalogService.allListitems(this.params.dealersID, this.params.branchID, this.params.categories);
  }

}
