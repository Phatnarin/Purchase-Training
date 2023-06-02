import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseComponent } from './purchase/purchase.component';
import { RouterModule } from '@angular/router';
import { PurchaseHomeComponent } from './purchase-home/purchase-home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,PurchaseHomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wang';
}
