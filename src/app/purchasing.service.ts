import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Purchasingmaterials } from './purchasingmaterials';

@Injectable({
  providedIn: 'root'
})
export class PurchasingService {
  
  url = 'https://pbp004.bp.minebea.local/api-test/purchase-materials' 

  constructor(private http:HttpClient) { }

  getPurchaseMaterials(data:Purchasingmaterials){
    return this.http.get<any[]>(`${this.url}/${data.place}/${data.division}/${data.opec}/${data.itemNo}`);
  }


}
