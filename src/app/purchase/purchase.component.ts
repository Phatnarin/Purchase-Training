import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasingService } from '../purchasing.service';
import { Purchasingmaterials } from '../purchasingmaterials';
import { PurchaseCardComponent } from '../purchase-card/purchase-card.component';
import { RouterModule } from '@angular/router';
import { PurchaseHomeComponent } from '../purchase-home/purchase-home.component';
import { ProductionResultSummary } from '../ProductionResultSummary';



@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [CommonModule,PurchaseCardComponent,RouterModule,PurchaseHomeComponent],
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {
  
  purchasingService: PurchasingService = inject(PurchasingService);
  purchasingList: Purchasingmaterials[] = [];

  product: ProductionResultSummary = {
    companyCode: 'B',
    date: '20230601',
    ToDate: '',
    Processes: '',
    PartTypes: '',
    GroupParts: '',
    Machines: '',
    by: ''
  }
  GetPurchaseMaterials(): void {
    this.purchasingService.getPurchaseMaterials(this.product).subscribe((purchasingList: Purchasingmaterials[]) => {
      this.purchasingList = purchasingList;
    });
  }


  constructor() {
    this.GetPurchaseMaterials();
    
  }

}
