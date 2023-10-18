import { Component } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent {
  signupform= new FormGroup({
    username: new FormControl('',[Validators.required]),
     
  })
  signupuser(){
    console.log(this.signupform.value)
  }
  get username(){
    return this.signupform.get( 'username')
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


  constructor (){}
  ngOnInit(): void {
    
    
  }
}
