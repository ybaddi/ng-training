import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-login',
  templateUrl: './formulaire-login.component.html',
  styleUrls: ['./formulaire-login.component.css']
})
export class FormulaireLoginComponent implements OnInit {

  username: FormControl = new FormControl('username',[Validators.required,Validators.pattern(/^[A-Z][a-z]{2,10}/)])
  password: FormControl =  new FormControl('password',[Validators.required,Validators.pattern(/^[A-Z][a-z]{2,10}/)])
  
  loginForm: FormGroup = new FormGroup({
    username: this.username,
    password: this.password
  })
  constructor() { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm.value);
  }

}
