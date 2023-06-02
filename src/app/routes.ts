import { Routes } from "@angular/router";
import { PurchaseComponent } from "./purchase/purchase.component";
import { PurchaseCardComponent } from "./purchase-card/purchase-card.component";
import { PurchaseHomeComponent } from "./purchase-home/purchase-home.component";
import { PurchaseSearchComponent } from "./purchase-search/purchase-search.component";
import { PurchaseSearch2Component } from "./purchase-search2/purchase-search2.component";


const routeConfig: Routes = [
    {
        path: '',
        component: PurchaseHomeComponent,
        title: 'Angular'
    },
    {
        path: 'purchase',
        component: PurchaseComponent,
        title: 'Angular'
    },
    {
        path: 'purchase-card',
        component: PurchaseCardComponent,
        title: 'Angular'
    },
    {
        path: 'purchase-Search',
        component: PurchaseSearchComponent,
        title: 'Angular'
    },
    {
        path: 'purchase-Search2',
        component: PurchaseSearch2Component,
        title: 'Angular'
    },

];
export default routeConfig;

