import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    email: '',
    password: ''
  };
  constructor(private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this.authService.register(this.user)
      .then(
        () => {
console.log("user created sucessufly");
// TODO redirect to todos pages
this.flashMessage.show('user created sucessufly',{
  cssClass: 'alrt-info',
  timer: 300
        });
        this.router.navigate(['/auth/login']);
      }
      ).catch(
        (err) => {
console.log(err);
        }
      )
  }

}
