import { Routes } from "@angular/router";
import { PurchaseComponent } from "./purchase/purchase.component";
import { PurchaseCardComponent } from "./purchase-card/purchase-card.component";


const routeConfig: Routes = [
    {
        path: '',
        component: PurchaseComponent,
        title: 'Angular'
    },
    {
        path: 'purchase-card',
        component: PurchaseCardComponent,
        title: 'Angular'
    },

];
export default routeConfig;

