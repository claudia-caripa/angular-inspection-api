import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionApiService } from 'src/app/inspection-api.service';

@Component({
  selector: 'app-add-edit-inspection',
  templateUrl: './add-edit-inspection.component.html',
  styleUrls: ['./add-edit-inspection.component.css']
})
export class AddEditInspectionComponent implements OnInit {

  inspectionList$!: Observable<any[]>;
  inspectionStatusList$!: Observable<any[]>;
  inspectionTypeList$!: Observable<any[]>;

  constructor(private service: InspectionApiService) { }

  @Input() inspection:any;
  id:number = 0;
  status:string = "";
  comment:string = "";
  inspectionTypeId!: number;

  ngOnInit(): void {
    this.inspectionList$ = this.service.getInspectionList();
    this.inspectionTypeList$ = this.service.getInspectionTypesList();
    this.inspectionStatusList$ = this.service.getStatusList();
    this.id = this.inspection.id;
    this.status = this.inspection.status;
    this.comment = this.inspection.comment;
    this.inspectionTypeId = this.inspection.inspectionTypeId;
  }

  addInspection(){

    var newInspection ={
      status:this.status,
      comments:this.comment,
      inspectionTypeId:this.inspectionTypeId,
    }

    this.service.addInspection(newInspection).subscribe(res =>{
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess){
        showAddSuccess.style.display = "block";
      }
      setTimeout(function(){
        if(showAddSuccess){
          showAddSuccess.style.display = "none";
        }
      }, 4000);
    })
  }

  updateInspection(){

  }

}
