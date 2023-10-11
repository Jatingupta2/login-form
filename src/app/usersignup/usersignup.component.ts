import { Component } from '@angular/core';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent {
inputtype:boolean=true;
visible:boolean=true;
viewpass(){
  this.visible =!this.visible;
  this.inputtype=!this.inputtype;
}
  constructor (){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
