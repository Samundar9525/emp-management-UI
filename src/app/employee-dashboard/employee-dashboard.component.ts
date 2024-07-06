import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {
  displayedColumns: string[] = ['emp_no', 'first_name', 'last_name', 'gender', 'birth_date', 'hire_date'];
  dataSource:any;
  title:any
  @ViewChild(MatPaginator)paginator!: MatPaginator;


  constructor(
    private route: ActivatedRoute,
    public router:Router,
    private dashboardService: DashboardService){
    }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const deptNo = params.get('deptNo');
      this.title = params.get('deptName');

      if (deptNo) {
        this.dashboardService.getEmployeesByDepartment(deptNo).subscribe(res=>{
         this.dataSource  = new MatTableDataSource(res);
         this.dataSource.paginator = this.paginator;
        });
      }
    });
  }

  onEmployeeRowClick(empNo:any){
       this.router.navigate(['/employee-details'], { queryParams: { empNo: empNo } });
  }
}
