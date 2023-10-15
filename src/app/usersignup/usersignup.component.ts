import { Component } from '@angular/core';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent {
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
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
