import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthCredentials } from 'src/app/interface/dto';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router
  ) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  errorMessage: string = '';
  isLoading = false;

  ngOnInit(): void {}

  onSubmit() {
    this.isLoading = true;
    if (this.loginForm.valid) {
      this.loginService
        .login(this.loginForm.value as AuthCredentials)
        .subscribe(() => {
          this.router.navigate(['/']);
        });
    } else {
      this.errorMessage = 'Please make sure all field are correct!';
    }
    this.isLoading = false;
  }
}
