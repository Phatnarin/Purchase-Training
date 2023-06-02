import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Purchasingmaterials } from './purchasingmaterials';
import { ProductionResultSummary } from './ProductionResultSummary';

@Injectable({
  providedIn: 'root'
})
export class PurchasingService {
  
  url = 'https://pbp004.bp.minebea.local/brg-api-dev/api/v1/summary/productionResult' ;

  getPurchaseMaterials(data:ProductionResultSummary){
    return this.http.get<any[]>(`${this.url}/${data.companyCode}/${data.date}`, {params:{...data}});
  }

  constructor(private http:HttpClient) { }
}