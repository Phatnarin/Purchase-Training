import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Purchasingmaterials } from '../purchasingmaterials';
import { PurchasingService } from '../purchasing.service';

@Component({
  selector: 'app-purchase-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './purchase-card.component.html',
  styleUrls: ['./purchase-card.component.css']
})
export class PurchaseCardComponent {
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
