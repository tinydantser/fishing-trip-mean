import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder
  ) { 

    this.form = this.fb.group({
      email: [""],
      password: [""]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginService.login(this.form.controls["email"].value, this.form.controls["password"].value).subscribe(res => {
      console.log(res.status);
      console.log(res.body);
    })
  }
}
