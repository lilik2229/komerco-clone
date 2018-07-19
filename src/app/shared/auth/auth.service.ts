import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
  ) { }

  public login(email:string,password:string):void{
    this.afAuth
      .auth
      .signInWithEmailAndPassword(email,password)
      .catch(
        (error)=>{
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        }
      );
  }

  public logout():void {
    this.afAuth.auth.signOut();
  }
  
}
