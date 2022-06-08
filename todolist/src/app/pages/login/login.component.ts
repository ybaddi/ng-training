import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user: User = {
    email: '',
    password: ''
  };
  constructor(private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.user)
      .then(
        () => {
console.log("you are loged");
// TODO redirect to todos pages
this.flashMessage.show('you are logged',{
  cssClass: 'alrt-info',
  timer: 300
        });
        this.router.navigate(['/todos']);
      }
      ).catch(
        (err) => {
console.log(err);
        }
      )
  }

}
