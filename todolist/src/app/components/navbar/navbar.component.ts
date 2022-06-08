import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from '@firebase/util';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // authenticatedUser:string||null=null;
  userAuthenticated:any;
  constructor(private authService:AuthService,
    private router:Router) { 
    }

  ngOnInit(): void {
    this.authService.isAuthonticated().subscribe((user)=>{
      // this.authenticatedUser=(user !=null)?user:null;
      // this.userAuthenticated = (user ==null)?false:true;
      // this.authenticatedUser = (user !=null)?user.email:'';
      this.userAuthenticated=JSON.parse(localStorage.getItem('user')!);
      console.log(this.userAuthenticated);
    })
  }

  logout(){
    this.authService.logout().then(()=>{
      
      this.router.navigate(['/auth/login']);
    })
  }

}
