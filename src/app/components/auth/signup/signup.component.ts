import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  formGroup !: FormGroup;
  submitted: boolean = false;

  passwordShow: boolean = false;

  constructor(
    private authService: AuthService,
    private route: Router,
    private formBuilder: FormBuilder
  ) { 
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      fName: ['' , Validators.required],
      lName: ['' , Validators.required],
      email: ['' , Validators.required],
      password: ['' , Validators.required],
    });
  }

  onSignup() {
    this.submitted = true;
    if (this.formGroup.valid) {
      this.authService.registerUser({ email: this.formGroup.controls['email'].value, password: this.formGroup.controls['password'].value});
      console.log('Signup successful');
    }
  }

  gotoLogin() {
    this.route.navigateByUrl('/login');
  }


  togglePasswordVisibility(): void {
    this.passwordShow = !this.passwordShow;
  }

  get f() { 
    return this.formGroup.controls; 
  }
}
