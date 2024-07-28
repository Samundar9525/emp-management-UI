import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalsComponent } from '../shared/modals/modals.component';
import { Validators } from '@angular/forms';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.scss']
})
export class ManageEmployeeComponent {

constructor(public dialog: MatDialog,private service:DashboardService){

}

  addEmployeeDetail(){
    this.service.getEmployeeNumber().subscribe((empno:any)=>{
      if(empno){
        this.dialog
        .open(ModalsComponent, {
          panelClass: ['form-body', 'wd40'],
          data: {
            isAddEmployee:true,
            headerTitle: 'Register',
            pText: 'Submit',
            singleColumn: true,
            contents:{
              emp_no: empno?empno:'',
              first_name:'',
              last_name:'',
              hire_date:'',
              birth_date:'',
              gender:''
            }
          },
        })
        .afterClosed()
        .subscribe((res) => {
         if (res){
          console.log(res)
          this.service.postCreateEmployee(res).subscribe(res=>{
          })
         }
        });
      }
    })
  }



  updateEmployeeDetail(){
        this.dialog
        .open(ModalsComponent, {
          panelClass: ['form-body', 'wd40'],
          data: {
            isUpdateEmployee:true,
            headerTitle: 'Update Employee Details',
            pText: 'Update',
            singleColumn: true,
            contents:{
              first_name:'',
              last_name:'',
              hire_date:'',
              birth_date:'',
              gender:''
            }
          },
        })
        .afterClosed()
        .subscribe((res) => {
         if (res){
          console.log(res)
          this.service.updateCreateEmployee(res.id,res.data).subscribe(res=>{
            console.log('data updated')
          })
         }
        });
  }


  deleteEmployeeDetail(){
    this.dialog
    .open(ModalsComponent, {
      panelClass: ['form-body', 'wd40'],
      data: {
        isDeleteEmployee:true,
        headerTitle: 'Delete Employee Details',
        pText: 'Delete',
        singleColumn: true,
      },
    })
    .afterClosed()
    .subscribe((res) => {
     if (res){
      this.service.deleteEmployee(res.id).subscribe(res=>{
        console.log('data deleted')
      })
     }
    });
  }
}
