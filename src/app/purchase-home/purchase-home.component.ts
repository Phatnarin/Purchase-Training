import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-purchase-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './purchase-home.component.html',
  styleUrls: ['./purchase-home.component.css']
})
export class PurchaseHomeComponent {

}
