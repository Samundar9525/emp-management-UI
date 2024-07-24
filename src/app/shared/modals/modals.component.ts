import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss'],
})
export class ModalsComponent {
  public commentForm!: FormGroup;
  public employeeForm!: FormGroup


  constructor(
    public dialog: MatDialogRef<ModalsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder,
    private services:DashboardService
  ) {
    switch (true) {
      case this.data?.isComment:
        this.commentForm = this._fb.group({
          Title: ['', Validators.required],
          Comment: [''],
        });
        break;
      case this.data?.isAddEmployee:
        this.employeeForm = this._fb.group({
          emp_no: [{value: data.contents.emp_no?data.contents.emp_no[0]+1:'', disabled: true}], // Assuming emp_no is auto-generated
          birth_date: ['', Validators.required],
          first_name: ['', Validators.required],
          last_name: ['', Validators.required],
          gender: ['', Validators.required],
          hire_date: ['', Validators.required],
        });
        break;
      case data?.isUpdateEmployee:
        this.employeeForm = this._fb.group({
          emp_no: ['',Validators.required],
          birth_date: ['', Validators.required],
          first_name: ['', Validators.required],
          last_name: ['', Validators.required],
          gender: ['', Validators.required],
          hire_date: ['', Validators.required],
        });
        break;
        case data?.isDeleteEmployee:
          this.employeeForm = this._fb.group({
            emp_no: ['',Validators.required],
            birth_date: ['', Validators.required],
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            gender: ['', Validators.required],
            hire_date: ['', Validators.required],
          });
    }
  }

  dialogSubmit(){
    switch(true) {
      case this.data?.isConfiramtion:
        this.dialog.close(true);
        break;
      case this.data?.isComment:
        this.dialog.close(this.commentForm.value);
        break;
      case this.data?.isAddEmployee:
        const formValues = this.employeeForm.value;
        const formattedData = {
          ...formValues,
          emp_no:this.data.contents.emp_no?this.data.contents.emp_no[0]+1:'',
          birth_date: moment(formValues.birth_date).format('YYYY-MM-DD'),
          hire_date: moment(formValues.hire_date).format('YYYY-MM-DD')
        };
        this.dialog.close(formattedData);
        break;
      case this.data?.isUpdateEmployee:
        const formValuesupdate = this.employeeForm.value;
        const formattedDataupdate = {
          ...formValuesupdate,
          birth_date: moment(formValuesupdate.birth_date).format('YYYY-MM-DD'),
          hire_date: moment(formValuesupdate.hire_date).format('YYYY-MM-DD')
        };
        this.dialog.close({id:this.employeeForm.get('emp_no')?.value,data:formattedDataupdate});
        break;
      case this.data?.isDeleteEmployee:
        this.dialog.close({id:this.employeeForm.get('emp_no')?.value})
    }
  }

  fetchEmployeeData(ev:any ){
    const inputElement = ev.target as HTMLInputElement;
    const empNo = inputElement.value;
    console.log('Employee Number:', empNo);
    this.services.getEmployeeDetails(empNo).subscribe(res=>{
      this.bindData(res);
    })
  }



  bindData(data:any){
    if(data){
      this.employeeForm.patchValue({
        emp_no: data.emp_no,
        birth_date: data.birth_date,
        first_name: data.first_name,
        last_name: data.last_name,
        gender: data.gender,
        hire_date: data.hire_date,
      });
    }
  }
}
