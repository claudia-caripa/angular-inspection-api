import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {

  readonly inspectionAPIUrl = "https://localhost:7231/api";

  constructor(private htt:HttpClient) { }

  //Inspections 
  getInspectionList(): Observable<any[]>{
    return this.htt.get<any>(this.inspectionAPIUrl + '/inspections');
  }

  addInspection(data:any){
    return this.htt.post(this.inspectionAPIUrl + '/inspections', data);
  }

  updateInspection(id:number|string, data:any){
    return this.htt.put(this.inspectionAPIUrl + `/inspections/${id}`, data);
  }

  deleteInspection(id:number|string){
    return this.htt.delete(this.inspectionAPIUrl + `/inspections/${id}`)
  }

  //Inspection Types
  getInspectionTypesList(): Observable<any[]>{
    return this.htt.get<any>(this.inspectionAPIUrl + '/inspectionTypes');
  }

  addInspectionTypes(data:any){
    return this.htt.post(this.inspectionAPIUrl + '/inspectionTypes', data);
  }

  updateInspectionTypes(id:number|string, data:any){
    return this.htt.put(this.inspectionAPIUrl + `/inspectionTypes/${id}`, data);
  }

  deleteInspectionTypes(id:number|string){
    return this.htt.delete(this.inspectionAPIUrl + `/inspectionTypes/${id}`)
  }

  //Statutes
  getStatusList(): Observable<any[]>{
    return this.htt.get<any>(this.inspectionAPIUrl + '/status');
  }

  addStatus(data:any){
    return this.htt.post(this.inspectionAPIUrl + '/status', data);
  }

  updateStatus(id:number|string, data:any){
    return this.htt.put(this.inspectionAPIUrl + `/status/${id}`, data);
  }

  deleteStatus(id:number|string){
    return this.htt.delete(this.inspectionAPIUrl + `/status/${id}`)
  }
}
