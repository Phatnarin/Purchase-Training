import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PurchaseCardComponent } from '../purchase-card/purchase-card.component';
import { PurchasingService } from '../purchasing.service';
import { Purchasingmaterials } from '../purchasingmaterials';
import { PurchaseHomeComponent } from '../purchase-home/purchase-home.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-purchase-search',
  standalone: true,
  imports: [CommonModule,RouterModule,PurchaseHomeComponent,PurchaseCardComponent,FormsModule],
  templateUrl: './purchase-search.component.html',
  styleUrls: ['./purchase-search.component.css']
})
export class PurchaseSearchComponent {
  purchasingService: PurchasingService = inject(PurchasingService);
  purchasingList: Purchasingmaterials[] = [];

  product: Purchasingmaterials = {
    place: 'T3',
    division: '71',
    opec: 'DZ',
    itemNo: 'All',
    itemName: '',
    onHand: 0,
    mainWarehouse: '',
    mainLocation: ''
  }
  Search(): void {
    if (this.product.itemNo == ""){
      this.product.itemNo = "All";
    }
    this.purchasingService.getPurchaseMaterials(this.product).subscribe((purchasingList: Purchasingmaterials[]) => {
      this.purchasingList = purchasingList;
    });
  }
  constructor() {
    this.product.itemNo = "All";
    this.Search();
}
}
