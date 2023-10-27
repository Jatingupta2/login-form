import { Component } from '@angular/core';
import { FormControl , FormGroup, Validators,AbstractControl,ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent {
  signupform= new FormGroup({
    username: new FormControl('',[Validators.required,Validators.maxLength(6)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
    confirmpassword: new FormControl('',[Validators.required]),
}, {
  validators: this.passwordMatchValidator,
})
  signupuser(){
   console.log('hello');
  }
  get username(){
    return this.signupform.get( 'username')
  }
  get email(){
    return this.signupform.get( 'email')
  }
  get password(){
    return this.signupform.get( 'password')
  }
  get confirmpassword(){
    return this.signupform.get( 'confirmpassword')
  }
confirminputtype:boolean=true;
passinputtype:boolean=true;
confirmvisible:boolean=true;

passvisible:boolean=true;
viewpass(){
  this.passvisible =!this.passvisible;

  this.passinputtype=!this.passinputtype;

}
confirmviewpass(){
  this.confirmvisible =!this.confirmvisible;
  this.confirminputtype=!this.confirminputtype;

}
 passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmpassword');

  if (!password || !confirmPassword) {
    // If either field is null, do not perform validation
    return null;
  }

  if (password.value !== confirmPassword.value) {
    return { passwordMismatch: true };
  } else {
    return null;
  }
}


  constructor (){}
  ngOnInit(): void {
    
    
  }
}
