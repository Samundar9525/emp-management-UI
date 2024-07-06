import { Component } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-dashboard',
  templateUrl: './department-dashboard.component.html',
  styleUrls: ['./department-dashboard.component.scss']
})
export class DepartmentDashboardComponent {
  data:any = []
  totalemployee = 0

  constructor(private dashboardServices:DashboardService, private router: Router,){
    this.dashboardServices.getDeptDashboardData().subscribe(res=>{
      this.data = res.map((re:any)=>{
        this.totalemployee += re.total_employees;
        return {id:re.dept_no,content:re.dept_name,count:re.total_employees,height:110,width:150}
      })
    });
  }

  cardClicked(ev:any){
    console.log(ev)
    this.router.navigate(['/employee-dashboard'],  { queryParams: { deptNo: ev.id,deptName: ev.content } });
  }
}
