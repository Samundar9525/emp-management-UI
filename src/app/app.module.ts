import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardCardsComponent } from './shared/dashboard-cards/dashboard-cards.component';
import {MatCardModule} from '@angular/material/card';
import { DepartmentDashboardComponent } from './department-dashboard/department-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ChartsComponent } from './shared/charts/charts.component';
import { TimelineComponent } from './shared/timeline/timeline.component';
import { NavigationPanelComponent } from './shared/navigation-panel/navigation-panel.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoginComponent } from './shared/login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { ModalsComponent } from './shared/modals/modals.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardCardsComponent,
    DepartmentDashboardComponent,
    EmployeeDashboardComponent,
    EmployeeDetailComponent,
    ChartsComponent,
    TimelineComponent,
    NavigationPanelComponent,
    LoginComponent,
    ManageEmployeeComponent,
    ModalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
