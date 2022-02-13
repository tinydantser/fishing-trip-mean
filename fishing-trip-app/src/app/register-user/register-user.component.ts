import { RegisterUserService } from './../services/register-user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  form: FormGroup;

  nameControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required]);
  acknowledgementControl = new FormControl(false, [Validators.required]);

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterUserService
  ) { 

    this.form = this.fb.group({
      name: this.nameControl,
      email: this.emailControl,
      password: this.passwordControl,
      beer: [""],
      acknowledgement: this.acknowledgementControl
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.registerService.register(this.nameControl.value, this.emailControl.value, this.passwordControl.value)
      .subscribe(res => {
        console.log(res);
      })
  }
}
