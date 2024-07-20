import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'emp-management-UI';
  isDrawerOpen = false;
  loggedUser='Login';
  constructor(public router: Router, public dialog: MatDialog,private loginServices:LoginService) {
    this.loginServices.userLogged.subscribe((res:any)=>{
      this.loggedUser = res.username?res.username:'Login';
    })
  }

  drawerHandler(ev: any) {
    if (ev === false) {
      this.isDrawerOpen = false;
    }
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
