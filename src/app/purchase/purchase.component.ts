import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasingService } from '../purchasing.service';
import { Purchasingmaterials } from '../purchasingmaterials';
import { PurchaseCardComponent } from '../purchase-card/purchase-card.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [CommonModule,PurchaseCardComponent,RouterModule],
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {
  
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

  GetPurchaseMaterials(): void {
    if (this.product.itemNo == ""){
      this.product.itemNo = "All";
    }
    this.purchasingService.getPurchaseMaterials(this.product).subscribe((purchasingList: Purchasingmaterials[]) => {
      this.purchasingList = purchasingList;
    });
  }
  constructor() {
    this.product.itemNo = "All";
    this.GetPurchaseMaterials();
}
}
