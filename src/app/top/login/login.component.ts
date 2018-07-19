import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private afAuth: AngularFireAuth
  ) {}
  
  ngOnInit() {
  }
  
  login(email:string,password:string):void {
    console.log(email,password);
  }
  
  logout():void {
    this.afAuth.auth.signOut();
  }
}
