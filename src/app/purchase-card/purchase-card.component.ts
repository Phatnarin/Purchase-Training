import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Purchasingmaterials } from '../purchasingmaterials';
import { PurchasingService } from '../purchasing.service';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { PurchaseHomeComponent } from '../purchase-home/purchase-home.component';
import { ProductionResultSummary } from '../ProductionResultSummary';

@Component({
  selector: 'app-purchase-card',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatGridListModule,FlexLayoutModule,RouterModule,PurchaseHomeComponent],
  templateUrl: './purchase-card.component.html',
  styleUrls: ['./purchase-card.component.css']
})
export class PurchaseCardComponent {
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
