import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';

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
    private _fb: FormBuilder
  ) {
    switch (true) {
      case this.data?.isComment:
        this.commentForm = this._fb.group({
          Title: ['', Validators.required],
          Comment: [''],
        });
        break;
      case this.data?.isAddEmployee:
        console.log( data.contents.emp_no)
        this.employeeForm = this._fb.group({
          emp_no: [{value: data.contents.emp_no?data.contents.emp_no[0]+1:'', disabled: true}], // Assuming emp_no is auto-generated
          birth_date: ['', Validators.required],
          first_name: ['', Validators.required],
          last_name: ['', Validators.required],
          gender: ['', Validators.required],
          hire_date: ['', Validators.required],
        });
        break;
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
        this.dialog.close(formattedData)
    }
  }
}
