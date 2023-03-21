import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionApiService } from 'src/app/inspection-api.service';

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css']
})
export class ShowInspectionComponent implements OnInit{
  
  inspectionList$!: Observable<any[]>;
  inspectionTypeList$!: Observable<any[]>;
  inspectionTypeList:any=[];

  //Map to display data associate with foreign keys
  inspectionTypeMap:Map<number,string> = new Map();
  
  constructor(private service: InspectionApiService) { }

  ngOnInit(): void {
    this.inspectionList$ = this.service.getInspectionList();
    this.inspectionTypeList$ = this.service.getInspectionTypesList();
    this.refreshInspectionTypesMap();
  }

  // Variables (properties)
  modalTitle:string = '';
  activateAddEditInspectionComponent:boolean = false;
  inspection:any;

  addModal(){
    this.modalTitle = "Add Inspection";
    this.activateAddEditInspectionComponent = true;
    this.inspection = {
      id:0,
      status:null,
      comments:null,
      inspectionTypeId:null,
    }
  }

  closeModal(){
    this.activateAddEditInspectionComponent = false;
    this.inspectionList$ = this.service.getInspectionList();
  }

  refreshInspectionTypesMap(){
    this.service.getInspectionTypesList().subscribe(data => {
      this.inspectionTypeList = data;

      for(let i = 0; i < data.length; i++){
        this.inspectionTypeMap.set(this.inspectionTypeList[i].id, this.inspectionTypeList[i].inspectionName);
      }
    })
  }

}
