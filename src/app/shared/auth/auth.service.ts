import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  public login(email:string,password:string): Promise<any>{
    return this.afAuth
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

  public isLogin(): boolean{
    return !!this.afAuth.auth.currentUser;
  }

  public setOnAuthStateChanged(): void{
    const redirectUrlAfterLogin: string = '/home';
    const redirectUrlAfterLogout: string = '/top';
    
    this.afAuth.auth.onAuthStateChanged(
      ()=>{
        if(this.isLogin()){
          // ログイン時の動作
          this.router.navigateByUrl(redirectUrlAfterLogin);
        }else{
          // ログアウト時の動作
          this.router.navigateByUrl(redirectUrlAfterLogout);
        };
      }
    );
  }
}
