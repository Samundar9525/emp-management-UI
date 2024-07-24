import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }

  getDeptDashboardData(): Observable<any> {
    return this.http.get<any>('/api/dept-dashboard?format=json').pipe(
      catchError(this.handleError)
    );
  }

  getEmployeesByDepartment(deptNo: string): Observable<any> {
    return this.http.get('/api/employees'+`/${deptNo}/`);
  }

  getEmployeeDetails(empNo: string): Observable<any> {
    return this.http.get('/api/employees-detail'+`/${empNo}/`);
  }

  getEmployeeDepartment(empNo: string): Observable<any> {
    return this.http.get('/api/employee-current-department'+`/${empNo}/`);
  }

  getEmployeeHikesDetails(empNo: string): Observable<any> {
    return this.http.get('/api/salary-hikes'+`/${empNo}`);
  }

  getEmployeeTimelineDetails(empNo: string): Observable<any> {
    return this.http.get('/api/designation-timeline'+`/${empNo}/`);
  }

  getdashboardDetails(empNo: string): Observable<any> {
    return this.http.get('/api/login/departments/'+`${empNo}/`);
  }

  getEmployeeNumber(): Observable<any> {
    return this.http.get('/api/get-emp-no');
  }

  postCreateEmployee (empData: any): Observable<any>{
    return this.http.post('/api/create-employee/',empData);
  }

  updateCreateEmployee (empno:any, empData: any): Observable<any>{
    return this.http.put('/api/update-employee/'+`${empno}/`,empData);
  }

  deleteEmployee(empNo:any){
    return this.http.delete('/api/delete-employee/'+`${empNo}/`);
  }
}

