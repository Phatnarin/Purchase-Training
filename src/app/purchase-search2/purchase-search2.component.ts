import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Purchasingmaterials } from '../purchasingmaterials';
import { PurchasingService } from '../purchasing.service';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { PurchaseHomeComponent } from '../purchase-home/purchase-home.component';
import { FormsModule } from '@angular/forms';
import { ProductionResultSummary } from '../ProductionResultSummary';

@Component({
  selector: 'app-purchase-search2',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatGridListModule,FlexLayoutModule,RouterModule,PurchaseHomeComponent,FormsModule],
  templateUrl: './purchase-search2.component.html',
  styleUrls: ['./purchase-search2.component.css']
})
export class PurchaseSearch2Component {

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

  Search(): void {
    this.purchasingService.getPurchaseMaterials(this.product).subscribe((purchasingList: Purchasingmaterials[]) => {
      this.purchasingList = purchasingList;
    });
  }


  constructor() {
    this.Search();
  }
}
