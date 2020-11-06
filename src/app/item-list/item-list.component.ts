import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from '../shared/services/catalog.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  params: any;
  categories: any = '';
  constructor(private route: ActivatedRoute, private router: Router, private catalogService: CatalogService) {
    this.route.params.subscribe( params => {
      this.params = params;
      this.allListitems();
    });
  }

  ngOnInit() {
    
  }

  showDetail(name) {
    this.router.navigate(['details', this.params.dealersID, this.params.branchID, name]);
  }

  allListitems() {
    this.categories = this.catalogService.allListitems(this.params.dealersID, this.params.branchID);
  }

}
