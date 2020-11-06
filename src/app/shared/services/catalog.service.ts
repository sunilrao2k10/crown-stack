import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  url = '../assets/API/catalog.json';
  constructor(private http: HttpClient) { }


  catalog() {
     this.http.get(this.url).subscribe(item => {
       localStorage.setItem('catalog', JSON.stringify(item));
     });
  }

  allListitems(dealerID = null, branchID = null, categories = null) {
    const data = JSON.parse(localStorage.getItem('catalog'));
    if (data) {
      if (dealerID && !branchID && !categories) {
        return data.data.locations.find(item => item.dealers_id === dealerID);
      } else if (dealerID && branchID && !categories) {
        const dealer = data.data.locations.find(item => item.dealers_id === dealerID);
        return dealer.branches.find(item => item.branch_id === branchID);
      } else if (dealerID && branchID && categories) {
        const dealer = data.data.locations.find(item => item.dealers_id === dealerID);
        const branch = dealer.branches.find(item => item.branch_id === branchID);
        return branch.categories.find(item => item.name === categories);
      }
    }
  }

}
