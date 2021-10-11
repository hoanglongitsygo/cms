import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.formLogin = formBuilder.group({
      account: [ null, Validators.required],
      password: [ null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submit() {
    if(this.formLogin.valid) {
      this.router.navigate(['/dashboard']);
    } else {
      this.formLogin.markAllAsTouched();
      return;
    }
  }

}
